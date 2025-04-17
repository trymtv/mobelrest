import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import Content from './Content'

export default function index() {
  return (
    <div className={"flex flex-col h-screen"}>
    <Header/>
    <Content/>
    <Footer/>
    </div>
  )
}
