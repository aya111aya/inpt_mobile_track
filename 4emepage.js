import React from 'react'
import Image from './images/Capture.PNG'
import Image2 from './images/capture1.PNG'
import Image3 from'./images/Capture3.PNG'
import Image4 from'./images/Capture4.PNG'
import Image5 from'./images/Capture5.PNG'
import Image6 from './images/cherche.PNG'
import Image7 from'./images/Capture7.PNG'
import Image9 from'./images/Capture9.PNG'
import Image8 from'./images/Capture8.PNG'
import Image10 from'./images/Capture10.PNG'
import UserImage from './images/user.PNG'
import UserImage1 from './images/user1.PNG'
import { Link } from 'react-router-dom';
import './4emepage.css';
const Page4 = () => {
  return (
    <><><div className='top_of_the_page'>
          <input className='input_style1' type="text" placeholder='chercher un vélo' />
          <button className='searchbutton'><img style={{ borderRadius: 23.5, width: 45, marginTop: 7 }} src={Image6} /></button>
      </div>
          <><><div className='flexboxp'>
              <div className='flexbox'>
                  <div>
                      <img className='autoimagediv' src={Image} />
                  </div>
                  <div className='fb2'>
                      <div className='image2'>
                          <img style={{ borderRadius: 25, width: 50 }} src={Image2} />
                      </div>
                      <div className='text'>
                          <p className='type'>petit discription</p>
                          <p className='duré'>disponible pour 3heurs</p>
                          <p className='nom'>utilisateur1 &bull;  region:alirfan</p>
                      </div>
                  </div>
              </div>
              <div className='flexbox'>
                  <div>
                      <img className='autoimagediv' src={Image3} />
                  </div>
                  <div className='fb2'>
                      <div className='image2'>
                          <img style={{ borderRadius: 25, width: 50 }} src={UserImage} />
                      </div>
                      <div className='text'>
                          <p className='type'>petit discription</p>
                          <p className='duré'>disponible pour 3heurs</p>
                          <p className='nom'>utilisateur1 &bull;  region:alirfan</p>
                      </div>
                  </div>
              </div>
          </div><div className='flexboxp'>
                  <div className='flexbox'>
                      <div>
                          <img className='autoimagediv' src={Image4} />
                      </div>
                      <div className='fb2'>
                          <div className='image2'>
                              <img style={{ borderRadius: 25, width: 50 }} src={Image2} />
                          </div>
                          <div className='text'>
                              <p className='type'>petit discription</p>
                              <p className='duré'>disponible pour 3heurs</p>
                              <p className='nom'>utilisateur1 &bull;  region:alirfan</p>
                          </div>
                      </div>
                  </div>
                  <div className='flexbox'>
                      <div>
                          <img className='autoimagediv' src={Image5} />
                      </div>
                      <div className='fb2'>
                          <div className='image2'>
                              <img style={{ borderRadius: 25, width: 50 }} src={UserImage1} />
                          </div>
                          <div className='text'>
                              <p className='type'>petit discription</p>
                              <p className='duré'>disponible pour 3heurs</p>
                              <p className='nom'>utilisateur1 &bull;  region:alirfan</p>
                          </div>
                      </div>
                  </div>
              </div></><><div className='flexboxp'>
                  <div className='flexbox'>
                      <div>
                          <img className='autoimagediv' src={Image7} />
                      </div>
                      <div className='fb2'>
                          <div className='image2'>
                              <img style={{ borderRadius: 25, width: 50 }} src={UserImage} />
                          </div>
                          <div className='text'>
                              <p className='type'>petit discription</p>
                              <p className='duré'>disponible pour 3heurs</p>
                              <p className='nom'>utilisateur1 &bull;  region:alirfan</p>
                          </div>
                      </div>
                  </div>
                  <div className='flexbox'>
                      <div>
                          <img className='autoimagediv' src={Image8} />
                      </div>
                      <div className='fb2'>
                          <div className='image2'>
                              <img style={{ borderRadius: 25, width: 50 }} src={Image2} />
                          </div>
                          <div className='text'>
                              <p className='type'>petit discription</p>
                              <p className='duré'>disponible pour 3heurs</p>
                              <p className='nom'>utilisateur1 &bull;  region:alirfan</p>
                          </div>
                      </div>
                  </div>
              </div><div className='flexboxp'>
                      <div className='flexbox'>
                          <div>
                              <img className='autoimagediv' src={Image9} />
                          </div>
                          <div className='fb2'>
                              <div className='image2'>
                                  <img style={{ borderRadius: 25, width: 50 }} src={UserImage1} />
                              </div>
                              <div className='text'>
                                  <p className='type'>petit discription</p>
                                  <p className='duré'>disponible pour 3heurs</p>
                                  <p className='nom'>utilisateur1 &bull;  region:alirfan</p>
                              </div>
                          </div>
                      </div>
                      <div className='flexbox'>
                          <div>
                              <img className='autoimagediv' src={Image10} />
                          </div>
                          <div className='fb2'>
                              <div className='image2'>
                                  <img style={{ borderRadius: 25, width: 50 }} src={Image2} />
                              </div>
                              <div className='text'>
                                  <p className='type'>petit discription</p>
                                  <p className='duré'>disponible pour 3heurs</p>
                                  <p className='nom'>utilisateur1 &bull;  region:alirfan</p>
                              </div>
                          </div>
                      </div>
                  </div></></></><Link to="/page5"><button>click</button></Link></>
  )
}

export default Page4

