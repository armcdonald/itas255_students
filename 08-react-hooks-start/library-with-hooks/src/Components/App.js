import React from "react";
import Library from "./Library";

import BookList from '../data/booklist.json';

import '../styles/App.css';

export default function App() {
  return (
    <Library books= {BookList} />
  )
}