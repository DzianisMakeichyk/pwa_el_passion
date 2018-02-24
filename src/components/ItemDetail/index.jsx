import React from 'react';
import { string, shape } from 'prop-types';
import './style.scss';

const Section = ({ title, children }) => (
  <section className="ItemDetail__section">
    <h4 className="ItemDetail__title">{title}</h4>
    <p className="ItemDetail__content">{children}</p>
  </section>
);

const ItemDetail = ({ item }) => (
  <div className="ItemDetail">
    <Section title="Taste">{item.taste}</Section>
    <Section title="Grapes">{item.grapes}</Section>
    <Section title="Food Pairing">{item.food_pairing}</Section>
    <Section title="Serving Tips">{item.serving_notes}</Section>
  </div>
);

Section.propTypes = {
  title: string,
  children: string,
};

ItemDetail.propTypes = {
  item: shape({
    taste: string,
    grapes: string,
    food_pairing: string,
    serving_notes: string,
  }).isRequired,
};

export default ItemDetail;
