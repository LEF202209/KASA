/**************************************************************************/
/**********            components/Cards index.js                    *******/
/**************************************************************************/
import React from 'react';
import datas from '../../datas/datas.js';
import Card from '../Card';
import Banner from '../../components/Banner';
import '../../sass/components/Cards.scss';

function Cards() {
  return (
    <main className='container cards_container'>
      <Banner/>
      {/* Affiche la liste des cartes Logement */}
      <section className="cards" >
        {/* Parcours les éléments du tableau */}
        {datas.map(data => (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Cards;