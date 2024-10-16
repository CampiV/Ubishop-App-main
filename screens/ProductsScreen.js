import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Modal } from 'react-native';

const ProductsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortByPrice, setSortByPrice] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Lista de productos
  const products = [
    { id: 1, name: 'Vicente Lueiza', price: 0.00, details: 'Detalle del producto 1', category: 'Electrónica' },
    { id: 2, name: 'Producto 2', price: 15.00, details: 'Detalle del producto 2', category: 'Ropa' },
    { id: 3, name: 'Producto 3', price: 20.00, details: 'Detalle del producto 3', category: 'Electrónica' },
    { id: 4, name: 'Producto 4', price: 25.00, details: 'Detalle del producto 4', category: 'Hogar' },
    { id: 5, name: 'Producto 5', price: 5.00, details: 'Detalle del producto 5', category: 'Ropa' },
    { id: 6, name: 'Producto 6', price: 30.00, details: 'Detalle del producto 6', category: 'Hogar' },
  ];

  // Filtrar productos por categoría y ordenar por precio si se selecciona
  const filteredProducts = products
    .filter(product => selectedCategory === 'Todos' || product.category === selectedCategory)
    .sort((a, b) => sortByPrice ? a.price - b.price : 0); // Si `sortByPrice` es true, ordenar por precio.

  // Renderizar cada producto en dos columnas
  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productButton}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <Text style={styles.productDetails}>{item.details}</Text>
      </View>
    </TouchableOpacity>
  );

  const categoryOptions = ['Todos', 'Electrónica', 'Ropa', 'Hogar'];

  return (
    <View style={styles.container}>
      {/* Filtros */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Categoría:</Text>
        <TouchableOpacity 
          style={styles.categoryButton} 
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.categoryButtonText}>{selectedCategory}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.filterButton} 
          onPress={() => setSortByPrice(!sortByPrice)}
        >
          <Text style={styles.filterButtonText}>
            {sortByPrice ? 'Quitar Ordenar por Precio' : 'Ordenar por Precio'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal para seleccionar categoría */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecciona una categoría</Text>
            {categoryOptions.map((category) => (
              <TouchableOpacity 
                key={category} 
                style={styles.categoryOption} 
                onPress={() => {
                  setSelectedCategory(category);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.categoryOptionText}>{category}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Lista de productos en 2 columnas */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row} // Estilo para columnas
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryButton: {
    backgroundColor: '#2C64F1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  categoryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: '#2C64F1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  categoryOptionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#2C64F1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productList: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    elevation: 2, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#f0f0f0', // Color de fondo para placeholder de imagen
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
  productDetails: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ProductsScreen;
