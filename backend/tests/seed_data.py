from products_mongo.models import Product, ProductCategory
from products_mongo.test_connection import init_db

init_db()

def seed_data():
    """Populate test database with initial data for integration testing."""
    
    Product.objects.delete()
    ProductCategory.objects.delete()

    category1 = ProductCategory(title="Electronics", description="Gadgets and devices")
    category1.save()

    category2 = ProductCategory(title="Clothing", description="Men and Women Fashion")
    category2.save()

    category3 = ProductCategory(title="Books", description="Fiction and non-fiction")
    category3.save()

    # Sample products
    products = [
        Product(
            name="Smartphone",
            description="A high-end smartphone",
            price=699.99,
            brand="TechCorp",
            quantity_in_warehouse=50,
            category=category1
        ),
        Product(
            name="T-Shirt",
            description="Cotton t-shirt",
            price=19.99,
            brand="FashionWear",
            quantity_in_warehouse=200,
            category=category2
        ),
        Product(
            name="Laptop",
            description="Gaming laptop with high specs",
            price=1299.99,
            brand="GamePro",
            quantity_in_warehouse=30,
            category=category1
        ),
        Product(
            name="Jeans",
            description="Slim fit blue jeans",
            price=49.99,
            brand="DenimX",
            quantity_in_warehouse=120,
            category=category2
        ),
        Product(
            name="Mystery Novel",
            description="Thrilling mystery book",
            price=14.99,
            brand="ReadMore",
            quantity_in_warehouse=85,
            category=category3
        )
    ]

    for product in products:
        product.save()

    print("Seed data inserted successfully.")

if __name__ == "__main__":
    seed_data()
