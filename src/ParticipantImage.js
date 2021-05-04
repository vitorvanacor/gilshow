import React from 'react';
import camillaImg from './images/camilla.jpg';
import julietteImg from './images/juliette.jpg';
import gil1 from './images/gil1.jpg';

const gilImgs = [gil1];

export default function ParticipantImage({ name }) {
  const imgSrc = name.includes('Camilla')
    ? camillaImg
    : name.includes('Juliette')
    ? julietteImg
    : gilImgs[Math.floor(Math.random() * gilImgs.length)];

  return <img src={imgSrc} width={120} height={120} alt={name} />;
}
