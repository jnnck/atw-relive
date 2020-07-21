import React, {useEffect, useState} from 'react';	
import Prismic from 'prismic-javascript'
import { Date, Link, RichText } from 'prismic-reactjs'

const apiEndpoint = 'https://tomorrowlandatw.cdn.prismic.io/api/v2'
const accessToken = 'MC5YdzlkRHhNQUFDTUFNWC02.77-9Je-_ve-_ve-_ve-_vWzvv71QYe-_ve-_vSLvv73vv73vv70j77-9IXtf77-9Au-_vV9fG24h77-9Du-_vQ'
 
const Client = Prismic.client(apiEndpoint, { accessToken })

const Home = props => {
    let partnerSlug = props.match.params.partner;
    if(partnerSlug){
        partnerSlug = partnerSlug.toLowerCase();
    }
    
    const [partner, setPartner] = useState();
    const [src, setSrc] = useState();

    const fetchData = async () => {
        console.log(partnerSlug);
        const response = await Client.getByUID('partner', partnerSlug);
        
        if (response) {
          setPartner(response)
        }
      }

    useEffect(() => {
        if(partnerSlug){
            fetchData()
        }

        Client.query(
            Prismic.Predicates.missing('my.notification.call_to_action_text')
        ).then(res => {
            console.log(res);
            // res is the response object, res.results holds the documents
        })

    }, []);

    const barStyles = {
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        width: '100%',
        height: '5px',
        background: `linear-gradient(90deg, ${partner ? partner.data.color_left : "#7ec8de"} 0%, ${partner ? partner.data.color_right : "#7ec8de"} 100%)`
    }

    return (
        <div className="wrapper">
            {/* Your header goes here */}
            <div className="hero">
                <div className="shell">
                    <a href="#" className="hero__logo"><img src="assets/images/logo.png" alt="" width={190} height={252} /></a>
                    <div className="hero__article">
                        <div className="article">
                            <div className="article__head">

                                <div className="article__decoration">
                                <div style={barStyles}></div>
                                    {partnerSlug && (
                                            <div className="article__logo">
                                                {partner && <img src={partner.data.logo.url} alt="" width={110} height={110} />}
                                            </div>
                                    )}
                                </div> 
                            
                                <a href="https://www.tomorrowland.com/en/around-the-world/welcome" target="_blank">MORE ABOUT THE FESTIVAL</a>
                            </div>{/* /.article__head */}
                            <div className="article__body hero__body">
                                <h3>JOIN THE PEOPLE OF TOMORROW FOR</h3>
                                <h1>A SPECTACULAR DIGITAL MUSIC FESTIVAL EXPERIENCE</h1>
                                <h4>At the day of the event, you can fill in your personal access code here.</h4>
                                <p>To enter the festival, you will need to sign into your Tomorrowland Account.<br/> You don’t have a Tomorrowland Account yet? You can already create one at <a href="https://my.tomorrowland.com">my.tomorrowland.com</a></p>

                                <p>Make your experience even more magical by enjoying the festival on a big screen. <br/> Check the full test environment on <a href="https://homeparty.tomorrowland.com">homeparty.tomorrowland.com</a></p>
                            </div>{/* /.article__body */}
                        </div>{/* /.article */}
                    </div>{/* /.hero__article */}
                </div>{/* /.shell */}
            </div>{/* /.hero */}
            <div className="section">
                <div className="shell">
                    <div className={src ? "article js-video has-video-playing" : "article js-video "}>

                        {partnerSlug && (
                            <blockquote>
                                {partner ? (
                                    <>
                                        <h3>A MESSAGE FROM {partner.data.message_from}</h3>
                                        <RichText render={partner.data.message}/>
                                    </>
                                ) : (
                                    <h3>Loading...</h3>
                                )}
                                
                            </blockquote>
                        )}
                        
                        
                        <div className="article__body article__body--alt">
                            <ul>
                                <li>
                                    <strong>Saturday July 25, 2020</strong>
                                    <h4>16h00–01h00 CEST</h4>
                                </li>
                                <li>
                                    <strong>Sunday July 26, 2020</strong>
                                    <h4>16h00–01h00 CEST</h4>
                                </li>
                            </ul>
                            <div className="article__video">
                                <iframe src={src ? src : "https://www.youtube.com/embed/X2sHUAuuMHo"} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                <div className="article__poster" style={{ backgroundImage: 'url(assets/images/temp/island.jpg)' }}>
                                </div>{/* /.article__poster */}
                                <button className="article__play js-video-trigger" onClick={()=> setSrc("https://www.youtube.com/embed/X2sHUAuuMHo?autoplay=1")}/>
                            </div>{/* /.article__video */}
                            <div className="article__caption">
                                <h3>OUR NEW HOME - Pāpiliōnem</h3>
                                <h4>OFFICIAL TRAILER</h4>
                            </div>{/* /.article__caption */}
                        </div>{/* /.article__body */}
                    </div>{/* /.article */}
                </div>{/* /.shell */}
            </div>{/* /.section */}
            <footer className="footer">
                <div className="footer__shell shell">
                    <p className="footer__copyright">©2020&nbsp;TOMORROWLAND <span>&nbsp;•&nbsp;</span> <br /> <a href="https://www.tomorrowland.com/en/around-the-world/practical/your-privacy/privacy-policy" target="_blank">PRIVACY POLICY</a> & <a href="https://www.tomorrowland.com/en/around-the-world/practical/general-terms-and-conditions" target="_blank">TERMS&nbsp;&amp;&nbsp;CONDITIONS</a></p>{/* /.footer__copyright */}
                </div>{/* /.footer__shell */}
            </footer>{/* /.footer */}
        </div>
    );
};

export default Home;