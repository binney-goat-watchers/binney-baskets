import React from 'react';
import basketGif from './made-the-basket.gif';
import './App.css';

function App() {
  return (
    <div className="App">
		  <h1>Binney Baskets</h1>
      <img src={basketGif} alt="loading..." width="936" height="532"/>
      <h2>Leaderboard</h2>
      <table>
        <th>Current Ranking</th>
        <tr>Panos</tr>
        <tr>Mamoon</tr>
        <tr>Noah</tr>
        <tr>Logan</tr>
        <tr>Steve G.</tr>
        <tr>Steve L.</tr>
        <tr>Peter</tr>
        <tr>Navneet</tr>
        <tr>Xiaoyan</tr>
        <tr>Tyler</tr>
      </table>
    </div>
  );
}

export default App;
