from datasets import load_dataset
import pandas as pd


# 515K Review File
# df = load_dataset(
#     'raw_data/hotels/515K_Negative-Positive.csv',
#     split='train'
# ).to_pandas()

hotel_reviews_515K = "raw_data/hotels/515K_Negative-Positive.csv"
hotels_515K = pd.read_csv(hotel_reviews_515K)
hotels_515K["review"] = hotels_515K["Negative_Review"] + hotels_515K["Positive_Review"]

keep_columns = ['Review_Date', 'Hotel_Name', 'review']
hotels_515K = hotels_515K[keep_columns]

hotels_515K.columns = ['review_date', 'hotel_name', 'review']

# print(hotels_515K.head())
print(hotels_515K)

hotels_515K.to_csv('data/hotels/515K_Hotel_Reviews.csv', index=False)