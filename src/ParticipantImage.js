import React from 'react';
import camillaImg from './images/camilla.jpg';
import julietteImg from './images/juliette.jpg';
import gil1 from './images/gil1.jpg';
import gil2 from './images/gil2.jpg';
import gil3 from './images/gil3.png';
import gil4 from './images/gil4.png';
import gil5 from './images/gil5.png';
import gil6 from './images/gil6.png';

const gilImgs = [gil1, gil2, gil3, gil4, gil5, gil6];

export default function ParticipantImage({ name }) {
  const imgSrc = name.includes('Camilla')
    ? camillaImg
    : name.includes('Juliette')
    ? julietteImg
    : gilImgs[Math.floor(Math.random() * gilImgs.length)];

  return <img src={imgSrc} width={120} height={120} alt={name} />;
}
