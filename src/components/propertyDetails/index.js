import * as React from 'react'
import classnames from 'classnames'
import { useState, useEffect } from 'react';
import Map from '../map'

import { scroller } from "react-scroll";

import styles from './styles.module.css'

import 'bootstrap/dist/css/bootstrap.css';

function PropertyDetails({ listing }) {
  if (!listing) {
    return null
  }

  const { image, title, address, features } = listing

  const columnClasses = classnames('column', 'col-2')
  const cardClasses = classnames('card')


  let im1 = "/images/1.jpg"
  let im2 = "/images/2.jpg"
  let im3 = "/images/3.jpg"
  let im4 = "/images/4.jpg"






  this.state = {
    index: 0,
    imgList: [im1, im2, im3, im4]
  }




  function imageChange(number) {

    this.setState({
      index: number
    })
  };

  scrollToSection = () => {
    scroller.scrollTo("space", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };



  
    return (

      <div className={styles.container}>

        <div className="columns">
          <div className="column col-12 col-xs-12">
            <div className="topnav">
              <a className='tablinks' onClick={openCity}>Overview</a>
              <a className='tablinks' onClick={scrollToSection}>Spaces</a>
              <a className='tablinks' onClick={openCity}>Map</a>
              <a className='tablinks' onClick={openCity}>Contacts</a>
            </div>
          </div>
        </div>
        <div className="columns">

          <div className="column col-6 col-xs-6">
            <h3 className='section-title1'>Property Facts</h3>
          </div>
          <div className="column col-6 col-xs-6">

          </div>

          <div className="column col-2 col-xs-6">
            <p className='properties'>Price</p>
            <p className='properties'>Size</p>
            <p className='properties'>Building Size</p>
            <p className='properties'>Total Lot Size</p>
            <p className='properties'>Zoning Type</p>
            <p className='properties'>Year Built</p>
            <p className='properties'>Parcel ID</p>
            <p className='properties'>Country</p>
            <p className='properties'>Frontage</p>
          </div>

          <div className="column col-4 col-xs-6">

            <p className='prop'>$22/SF/YR</p>
            <p className='prop'>1,150 - 1500 SF</p>
            <p className='prop'>26,300 SF</p>
            <p className='prop'>85,511 SF</p>
            <p className='prop'>Commercial</p>
            <p className='prop'>1999</p>
            <p className='prop'>50-42-06-01-0120</p>
            <p className='prop'>Broward</p>
            <p className='prop'>314.00 FT</p>

          </div>

          <div className="column col-6 col-xs-12">
            <div className='row'>
              <div className='col-8'>
                <img className="img-responsive" src={this.state.imgList[this.state.index]} alt={title} />
              </div>
              <div className='col-4'>
                <img className="img-responsive" onClick={() => imageChange(0)} src={im1} />
                <img className="img-responsive" onClick={() => imageChange(1)} src={im2} />
                <img className="img-responsive" onClick={() => imageChange(2)} src={im3} />
                <img className="img-responsive" onClick={() => imageChange(3)} src={im4} />
              </div>
            </div>

          </div>
        </div>

        <div className="columns">

          <div className="column col-12 col-xs-12">
            <h3 className='section-title1'>Highlights</h3>

            <ul className={styles.list}>
              {features.map(feature => (
                <li key={feature}>
                  <small>{feature}</small>
                </li>
              ))}
            </ul>
          </div>


          <div className="column col-12 col-xs-12">
            <h3 className='section-title1'>Desciption</h3>

            <p className='descp'> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
              (injected humour and the like).
              is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
              (injected humour and the like).
            </p>
          </div>


          <div className="column col-12 col-xs-12">
            <h3 className='section-title1'>Location</h3>

            <p className='descp'> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
              (injected humour and the like).
              is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
              (injected humour and the like).
            </p>
          </div>

        </div>



        <p className='text-bold mt-3 space'>Spaces Available</p>

        <div className="card">
          <h3 className='div-header'>
            Suite 1002
          </h3>
          <div className="row">

            <div className={columnClasses}>
              <p className="card-props">Unit Size</p>
              <p className="card-props">Price</p>
              <p className="card-props">Price Per SF</p>
            </div>

            <div className={columnClasses}>
              <p className="card-props">4,008 SF</p>
              <p className="card-props">$5,000,000</p>
              <p className="card-props">$1,247.50</p>
            </div>

            <div className={columnClasses}>
              <p className="card-props">Space Type</p>
              <p className="card-props">Available</p>

            </div>

            <div className={columnClasses}>
              <p className="card-props">Retail</p>
              <p className="card-props">Immediately</p>

            </div>

            <div className="col-12">
              <p className="card-props">Sale Notes</p>
              <p className='card-descp'> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              </p>
            </div>
          </div>

        </div>
        <div className="card">
          <h3 className='div-header'>
            Suite 1002
          </h3>
          <div className="row">

            <div className={columnClasses}>
              <p className="card-props">Unit Size</p>
              <p className="card-props">Price</p>
              <p className="card-props">Price Per SF</p>
            </div>

            <div className={columnClasses}>
              <p className="card-props">4,008 SF</p>
              <p className="card-props">$5,000,000</p>
              <p className="card-props">$1,247.50</p>
            </div>

            <div className={columnClasses}>
              <p className="card-props">Space Type</p>
              <p className="card-props">Available</p>

            </div>

            <div className={columnClasses}>
              <p className="card-props">Retail</p>
              <p className="card-props">Immediately</p>

            </div>

            <div className="col-12">
              <p className="card-props">Sale Notes</p>
              <p className='card-descp'> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              </p>
            </div>
          </div>

        </div>




        <p className="text-bold mt-3">Map</p>
        <Map address={address} />

        <p className="text-bold mt-3">Contacts</p>
        <div className="row">
          <div className="col-3">
            <div className={cardClasses}>
              <div className="card-header">
                <div className="card-title h5">Contact Information</div>
              </div>
              <div className="card-body">
                <p className='small-card-p'>Contact Brokers</p>
                <div className="row">
                  <div className="col-4">
                    <img className="img-responsive" src={`/server/${image}`} alt={title} />
                  </div>
                  <div className="col-8">
                    <p className='small-card-text active'>Jonathan Doe</p>
                    <p className='small-card-text'>JDoe@Realestate.com</p>
                    <p className='small-card-text'>Cell:(305) 867-5309</p>
                    <p className='small-card-text'>Office: (305) 867-5310</p>

                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-3">
            <div className={cardClasses}>
              <div className="card-header">
                <div className="card-title h5">Contact Information</div>
              </div>
              <div className="card-body">
                <p className='small-card-p'>Contact Brokers</p>
                <div className="row">
                  <div className="col-4">
                    <img className="img-responsive" src={`/server/${image}`} alt={title} />
                  </div>
                  <div className="col-8">
                    <p className='small-card-text active'>Jonathan Doe</p>
                    <p className='small-card-text'>JDoe@Realestate.com</p>
                    <p className='small-card-text'>Cell:(305) 867-5309</p>
                    <p className='small-card-text'>Office: (305) 867-5310</p>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  
}



export default PropertyDetails
