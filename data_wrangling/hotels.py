import pandas as pd
import string
from nltk.corpus import wordnet
from nltk import pos_tag
from nltk.corpus import stopwords
from nltk.tokenize import WhitespaceTokenizer
from nltk.stem import WordNetLemmatizer
from tqdm import tqdm

# NLTK Preinstalling preparations
# nltk.download('stopwords')
# nltk.download('averaged_perceptron_tagger')
# nltk.download('wordnet')

tqdm.pandas()


#515.7K Hotel Reviews File
hotel_reviews_515K = 'raw_data/hotels/515K_Negative-Positive.csv'
reviews_515K = pd.read_csv(hotel_reviews_515K)

reviews_515K['review'] = reviews_515K['Negative_Review'] + reviews_515K['Positive_Review']
reviews_515K['is_bad_review'] = reviews_515K['Reviewer_Score'].apply(
    lambda x: 1 if x < 5 else 0
)
reviews_515K = reviews_515K[['Review_Date', 'Hotel_Name', 'review', 'is_bad_review']]
reviews_515K.columns = ['review_date', 'hotel_name', 'review', 'is_bad_review']

reviews_515K['review'] = reviews_515K['review'].apply(
    lambda x: x.replace('No Negative', '').replace('No Positive', '')
)

def get_wordnet_pos(pos_tag):
    if pos_tag.startswith('J'):
        return wordnet.ADJ
    elif pos_tag.startswith('V'):
        return wordnet.VERB
    elif pos_tag.startswith('N'):
        return wordnet.NOUN
    elif pos_tag.startswith('R'):
        return wordnet.ADV
    else:
        return wordnet.NOUN
    

def clean_text(text):
    text = text.lower()
    text = [word.strip(string.punctuation) for word in text.split(' ')]
    text = [word for word in text if not any(c.isdigit() for c in word)]
    stop = stopwords.words('english')
    text = [x for x in text if x not in stop]
    text = [t for t in text if len(t) > 0]
    pos_tags = pos_tag(text)
    text = [WordNetLemmatizer().lemmatize(t[0], get_wordnet_pos(t[1])) for t in pos_tags]
    text = [t for t in text if len(t) > 1]
    text = ' '.join(text)
    return(text)


# reviews_515K['review_clean'] = reviews_515K['review'].apply(lambda x: clean_text(x))
reviews_515K['review_clean'] = reviews_515K['review'].progress_apply(clean_text)
# reviews_515K.drop('review', axis=1, inplace=True)

# print(reviews_515K.head())

# reviews_515K.to_csv('data/hotels/515K_Hotel_Reviews.csv', index=False)

