from datetime import datetime
from bson import ObjectId

valid_product = {
    "name": "Mock Phone",
    "price": 499.99,
    "brand": "MockBrand",
    "quantity_in_warehouse": 100,
    "category": ObjectId(),
    "created_at": datetime(2024, 4, 1)
}

negative_price_product = {
    "name": "Faulty Phone",
    "price": -100.00,
    "brand": "MockBrand",
    "quantity_in_warehouse": 50
}

duplicate_name_product = {
    "name": "Mock Phone",
    "price": 299.99,
    "brand": "MockBrand"
}

invalid_category_product = {
    "name": "Orphan Product",
    "price": 100,
    "brand": "Brandless",
    "category": "invalid_id"
}

date_range_start = datetime(2024, 4, 10)
date_range_end = datetime(2024, 4, 5)  # invalid: end < start
