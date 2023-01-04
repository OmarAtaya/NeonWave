import React from 'react';
import Data from './Products.js';
import Product from './Product';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Collections, Title, CategoryList, Category1, Category2} from './CollectionElements';

function Collection() {
  return (
    <Collections>
        <Title>OUR FEATURED COLLECTION</Title>
        <CategoryList>
            <Category1>BEST SELLERS</Category1>
            <Category2>Anime</Category2>
        </CategoryList>
        <Container fluid={true}>
            <Row lg={4} md={4} sm={2}>
                {Data.map(product => (
                    <Col md={12} lg={4}>
                        <Product key={product.id} product={product} />
                    </Col>  
                ))} 
            </Row>
        </Container>
        
    </Collections>
  )
}

export default Collection