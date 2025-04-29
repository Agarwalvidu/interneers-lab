import unittest
from unittest.mock import patch, MagicMock
from products_mongo.product_category_services import ProductCategoryService

class TestProductCategoryService(unittest.TestCase):

    @patch('products_mongo.product_category_repository.ProductCategoryRepository.create_category')
    def test_create_category(self, mock_create_category):
        """Test category creation"""
        mock_category = {"id": "1", "title": "Electronics", "description": "Gadgets"}
        mock_create_category.return_value = mock_category

        category = ProductCategoryService.create_category(mock_category)
        self.assertEqual(category["title"], "Electronics")

    @patch('products_mongo.product_category_repository.ProductCategoryRepository.create_category')
    def test_create_category_with_invalid_input(self, mock_create_category):
        """Test category creation with missing fields"""
        mock_create_category.side_effect = ValueError("Title is required")

        with self.assertRaises(ValueError):
            ProductCategoryService.create_category({"description": "No title provided"})

    @patch('products_mongo.product_category_services.ProductCategoryService.get_all_categories')
    def test_get_all_categories(self, mock_get_all_categories):
        """Test retrieving all categories"""
        mock_categories = [
            {"id": "1", "title": "Electronics", "description": "Gadgets"},
            {"id": "2", "title": "Furniture", "description": "Home items"}
        ]
        mock_get_all_categories.return_value = mock_categories

        categories = ProductCategoryService.get_all_categories()
        self.assertEqual(len(categories), 2)
        self.assertEqual(categories[0]["title"], "Electronics")

    @patch('products_mongo.product_category_repository.ProductCategoryRepository.get_category_by_id')
    def test_get_category_by_id(self, mock_get_category_by_id):
        """Test retrieving a category by ID"""
        mock_category = {"id": "1", "title": "Electronics", "description": "Gadgets"}
        mock_get_category_by_id.return_value = mock_category

        category = ProductCategoryService.get_category_by_id("1")
        self.assertEqual(category["title"], "Electronics")

    @patch('products_mongo.product_category_repository.ProductCategoryRepository.get_category_by_id')
    def test_get_category_by_invalid_id(self, mock_get_category_by_id):
        """Test retrieving a category with invalid/non-existent ID"""
        mock_get_category_by_id.return_value = None

        result = ProductCategoryService.get_category_by_id("non-existent-id")
        self.assertIsNone(result)

    @patch('products_mongo.product_category_repository.ProductCategoryRepository.update_category')
    def test_update_category(self, mock_update_category):
        """Test updating a category"""
        updated_category = {"id": "1", "title": "Updated Electronics", "description": "Updated Gadgets"}
        mock_update_category.return_value = updated_category

        result = ProductCategoryService.update_category("1", {"title": "Updated Electronics"})
        self.assertEqual(result["title"], "Updated Electronics")

    @patch('products_mongo.product_category_repository.ProductCategoryRepository.update_category')
    def test_update_category_with_invalid_data(self, mock_update_category):
        """Test updating a category with invalid data"""
        mock_update_category.side_effect = ValueError("Invalid update data")

        with self.assertRaises(ValueError):
            ProductCategoryService.update_category("1", {"unknown_field": "value"})

    @patch('products_mongo.product_category_repository.ProductCategoryRepository.delete_category')
    def test_delete_category(self, mock_delete_category):
        """Test deleting a category"""
        mock_delete_category.return_value = True

        result = ProductCategoryService.delete_category("1")
        self.assertTrue(result)

    @patch('products_mongo.product_category_repository.ProductCategoryRepository.delete_category')
    def test_delete_nonexistent_category(self, mock_delete_category):
        """Test deleting a non-existent category"""
        mock_delete_category.return_value = False

        result = ProductCategoryService.delete_category("invalid-id")
        self.assertFalse(result)

if __name__ == '__main__':
    unittest.main()
