import { useState } from "react";
import Link from 'next/link'
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import { useEffect } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

export default function FirstScreenComp() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);

    function handleClose() {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    function handleShow() {
        setShow(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    function handleShow2() {
        setShow(false)
        setShow2(true)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    function handleShow3() {
        setShow(false)
        setShow2(false)
        setShow3(true)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    function handleShow4() {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(true)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    function handleShow5() {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(true)
        setShow6(false)
        setShow7(false)
    }
    function handleShow6() {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(true)
        setShow7(false)
    }
    function handleShow7() {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(true)
    }

    useEffect(() => {
        handleShow()
    }, [])


    return (
        <div>
            {show ?
                <Modal className="animationObject" show={show} onHide={() => handleClose()} backdrop="static" keyboard={false} centered fullscreen={'lg-down'} size={'xl'} animation={false}>
                    <Modal.Body className="px-5" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                        <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/d85b9cab000824a606c5beb5f3e27540.svg" alt="#ImgNotFound" />
                        <ProgressBar variant="success" now={1} style={{ height: "10px" }} className='mt-4' />
                        <h2 className="mt-3">Let’s get started. Which of these best describes you?</h2>
                        <p className="text-secondary extra_info_data">We’ll help you get set up based on your business needs.</p>
                        <div className="row w-100">
                            <div className="col-md-6 mt-lg-0 mt-3">
                                <div className="p-2 p-md-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    {/* <input type="radio" id="starting" />&emsp;
                                    <label for="starting"> I’m just starting</label> */}
                                    <div className="row">
                                        <div className="col-1">
                                            <input type="radio" id="starting" />&emsp;
                                        </div>
                                        <div className="col-11">
                                            <label for="starting"> I’m just starting</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-lg-0 mt-3">
                                <div className="p-2 p-md-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    {/* <input type="radio" id="sellingOnline" />&emsp;
                                    <label for="sellingOnline"> I’m already selling online or in person</label> */}
                                    <div className="row">
                                        <div className="col-1">
                                            <input type="radio" id="sellingOnline" />&emsp;
                                        </div>
                                        <div className="col-11">
                                            <label for="sellingOnline"> I’m already selling online or in person</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skip_and_next_btn" style={{ float: "right" }}>
                            <b className="text-secondary" style={{ cursor: "pointer" }} onClick={() => handleShow2()}>Skip</b>
                            &emsp;
                            <Button variant="success" onClick={() => handleShow2()}><b>Next</b></Button>
                        </div>
                    </Modal.Body>
                </Modal>
                :
                <></>
            }
            {show2 ?
                <Modal show={show2} backdrop="static" keyboard={false} centered fullscreen={'xl-down'} size={'xl'} animation={false}>
                    <Modal.Body className="px-5" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                        <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/d85b9cab000824a606c5beb5f3e27540.svg" alt="#ImgNotFound" />
                        <ProgressBar variant="success" now={30} style={{ height: "10px" }} className='mt-4' />
                        <h2 className="mt-5">Where would you like to sell?</h2>
                        <p className="text-secondary extra_info_data">Pick as many as you like – you can always change these later. We'll make sure you're set up to sell in these places.</p>
                        <div className="row w-100">
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 pt-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        <div className="col-1 col-xl-1 mt-xl-3">
                                            <input type="checkbox" id="starting" checked />&emsp;
                                        </div>
                                        <div className="col-7 col-xl-8 mt-xl-2">
                                            <label for="starting"> <b>I’m just starting</b> <br className="extra_info" /><span className="extra_info">Create a fully customizable website</span></label>
                                        </div>
                                        <div className="col-4 col-xl-3">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 pt-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        <div className="col-1 col-xl-1 mt-xl-3">
                                            <input type="checkbox" id="sellingOnline" />&emsp;
                                        </div>
                                        <div className="col-7 col-xl-8 mt-xl-2">
                                            <label for="sellingOnline"> <b>I’m already selling online or in person</b> <br className="extra_info" /><span className="extra_info">Add a Buy Button to your website</span></label>
                                        </div>
                                        <div className="col-4 col-xl-3">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 pt-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        <div className="col-1 col-xl-1 mt-xl-3">
                                            <input type="checkbox" id="social_media" />&emsp;
                                        </div>
                                        <div className="col-7 col-xl-8">
                                            <label for="social_media"> <b>Social media</b> <br className="extra_info" /><span className="extra_info">Reach customers through Facebook, Instagram, TikTok</span></label>
                                        </div>
                                        <div className="col-4 col-xl-3">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 pt-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        <div className="col-1 col-xl-1 mt-xl-3">
                                            <input type="checkbox" id="online_marketplaces" />&emsp;
                                        </div>
                                        <div className="col-7 col-xl-8">
                                            <label for="online_marketplaces"> <b>Online marketplaces</b> <br className="extra_info" /><span className="extra_info">List products on Google, Amazon, and more</span></label>
                                        </div>
                                        <div className="col-4 col-xl-3">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 pt-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        <div className="col-1 col-xl-1 mt-xl-3">
                                            <input type="checkbox" id="in_person" />&emsp;
                                        </div>
                                        <div className="col-7 col-xl-8">
                                            <label for="in_person"> <b>In person</b> <br className="extra_info" /><span className="extra_info">Sell at retail stores, pop-ups, or other physical locations</span></label>
                                        </div>
                                        <div className="col-4 col-xl-3">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="p-4" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="py-md-2">
                                        <input type="checkbox" id="i_am_not_sure" />&emsp;
                                        <label for="i_am_not_sure"> <b>I'm not sure</b> <br className="extra_info" /><div></div></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row mt-3 pt-5">
                                <div className="col-6">
                                    <b onClick={() => handleShow()} style={{ cursor: 'pointer' }}>Back</b>
                                </div>
                                <div className="col-6" style={{ float: "right", textAlign: 'right' }}>
                                    <Link href="/#">
                                        <a className="text-success" style={{ textDecoration: "none" }} onClick={() => handleShow3()}><b>Skip</b></a>
                                    </Link>
                                    &emsp;
                                    <Button variant="success" onClick={() => handleShow3()}><b>Next</b></Button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                :
                <></>
            }
            {show3 ?
                <Modal show={show3} backdrop="static" keyboard={false} centered fullscreen={'xl-down'} size={'xl'} animation={false}>
                    <Modal.Body className="px-5" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                        <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/d85b9cab000824a606c5beb5f3e27540.svg" alt="#ImgNotFound" />
                        <ProgressBar variant="success" now={90} style={{ height: "10px" }} className='mt-4' />
                        <h2 className="mt-5">What do you plan to sell?</h2>
                        <p className="text-secondary extra_info_data">Choose all that apply, and we’ll make sure you’re set up to sell.</p>
                        <div className="row w-100">
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 py-2" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="pt-4">
                                                <div className="row">
                                                    <div className="col-2 col-xl-1">
                                                        <input type="checkbox" id="physical_products" />&emsp;
                                                    </div>
                                                    <div className="col-10 col-xl-11">
                                                        <label for="physical_products"> <b>Physical products</b> <br className="extra_info" /><div></div></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 pt-3 pb-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="">
                                                <div className="row">
                                                    <div className="col-2 col-xl-1">
                                                        <input type="checkbox" id="digital_products" />&emsp;
                                                    </div>
                                                    <div className="col-10 col-xl-11">
                                                        <label for="digital_products"> <b>Digital products</b> <br className="extra_info" /><span className="extra_info">Including music, digital art, or NFTs</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 col-xl-3">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 pt-3 pb-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        {/* <div className="col-1 col-xl-1 mt-xl-3">
                                            <input type="checkbox" id="Services" />&emsp;
                                        </div>
                                        <div className="col-7 col-xl-8">
                                            <label for="Services"> <b>Services</b> <br className="extra_info" /><span className="extra_info">Including coaching, housekeeping, or consulting</span></label>
                                        </div> */}
                                        <div className="col-8">
                                            <div className="">
                                                <div className="row">
                                                    <div className="col-2 col-xl-1">
                                                        <input type="checkbox" id="Services" />&emsp;
                                                    </div>
                                                    <div className="col-10 col-xl-11">
                                                        <label for="Services"> <b>Services</b> <br className="extra_info" /><span className="extra_info">Including coaching, housekeeping, or consulting</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 col-xl-3">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="p-4" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="py-md-3">
                                        <input type="checkbox" id="i_am_not_sure" />&emsp;
                                        <label for="i_am_not_sure"> <b>I'm not sure</b> <br className="extra_info" /><div></div></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skip_and_next_btn_for_scrn_3">
                            <div className="row mt-3">
                                <div className="col-6">
                                    <b onClick={() => handleShow2()} style={{ cursor: 'pointer' }}>Back</b>
                                </div>
                                <div className="col-6" style={{ float: "right", textAlign: 'right' }}>
                                    <Link href="/#">
                                        <a className="text-success" style={{ textDecoration: "none" }} onClick={() => handleShow4()}><b>Skip</b></a>
                                    </Link>
                                    &emsp;
                                    <Button variant="success" onClick={() => handleShow4()}><b>Next</b></Button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                :
                <></>
            }
            {show4 ?
                <Modal show={show4} backdrop="static" keyboard={false} centered fullscreen={'xl-down'} size={'xl'} animation={false}>
                    <Modal.Body className="px-5" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                        <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/d85b9cab000824a606c5beb5f3e27540.svg" alt="#ImgNotFound" />
                        <ProgressBar variant="success" now={90} style={{ height: "10px" }} className='mt-4' />
                        <h2 className="mt-5">Where will you get your products?</h2>
                        <p className="text-secondary extra_info_data">Pick the option that best fits your business right now. You can always change this later.</p>
                        <div className="row w-100">
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 py-2" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="pt-4">
                                                <div className="row">
                                                    <div className="col-2 col-xl-1">
                                                        <input type="checkbox" id="mySelf_product" />&emsp;
                                                    </div>
                                                    <div className="col-10 col-xl-11">
                                                        <label for="mySelf_product"> <b>I’ll find or make products myself</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 pt-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        {/* <div className="col-1 col-xl-1 mt-xl-3">
                                            <input type="checkbox" id="dropshipping_supplier" />&emsp;
                                        </div>
                                        <div className="col-7 col-xl-8">
                                            <label for="dropshipping_supplier"> <b>I’ll get them from a dropshipping supplier</b></label>
                                        </div> */}
                                        <div className="col-8 col-xl-9">
                                            <div className="row">
                                                <div className="col-2 col-xl-1">
                                                    <input type="checkbox" id="dropshipping_supplier" />&emsp;
                                                </div>
                                                <div className="col-10 col-xl-11">
                                                    <label for="dropshipping_supplier"> <b>I’ll get them from a dropshipping supplier</b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 col-xl-3">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="px-4 pt-3" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="row">
                                        {/* <div className="col-1 col-xl-1 mt-xl-3">
                                            <input type="checkbox" id="demand_services" />&emsp;
                                        </div>
                                        <div className="col-7 col-xl-8">
                                            <label for="demand_services"> <b>I’ll use a print on demand service with my logo or design</b></label>
                                        </div> */}
                                        <div className="col-8 col-xl-9">
                                            <div className="row">
                                                <div className="col-2 col-xl-1">
                                                    <input type="checkbox" id="demand_services" />&emsp;
                                                </div>
                                                <div className="col-10 col-xl-11">
                                                    <label for="demand_services"> <b>I’ll use a print on demand service with my logo or design</b></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 col-xl-3">
                                            <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/6b3415dfdf5aeb62668a7db7335a09c5.svg" alt="#ImgNotFound" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <div className="p-4" style={{ border: "1px solid #C9CCCF", borderRadius: "5px" }}>
                                    <div className="py-md-2">
                                        <input type="checkbox" id="i_am_not_sure" />&emsp;
                                        <label for="i_am_not_sure"> <b>I'm not sure</b> <br className="extra_info" /><div></div></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skip_and_next_btn_for_scrn_3">
                            <div className="row mt-5 pt-3">
                                <div className="col-6">
                                    <b onClick={() => handleShow3()} style={{ cursor: 'pointer' }}>Back</b>
                                </div>
                                <div className="col-6" style={{ float: "right", textAlign: 'right' }}>
                                    <Link href="/#">
                                        <a className="text-success" style={{ textDecoration: "none" }} onClick={() => handleShow5()}><b>Skip</b></a>
                                    </Link>
                                    &emsp;
                                    <Button variant="success" onClick={() => handleShow5()}><b>Next</b></Button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                :
                <></>
            }
            {show5 ?
                <Modal className="animationObject" show={show5} backdrop="static" keyboard={false} centered fullscreen={'xl-down'} size={'md'} animation={false}>
                    <Modal.Body className="px-5" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                        <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/d85b9cab000824a606c5beb5f3e27540.svg" alt="#ImgNotFound" />
                        <h3 className="mt-2">What would you like to name your store?</h3>
                        <p className="text-secondary" style={{ fontSize: '18px' }}>You can skip this for now if you're still working on it.</p>
                        <h6>Store name(Optional)</h6>
                        <input className="form-control form-control-lg" type="text" style={{ borderRadius: "5px" }}></input>
                        <div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <b onClick={() => handleShow4()} style={{ cursor: 'pointer' }}>Back</b>
                                </div>
                                <div className="col-6" style={{ float: "right", textAlign: 'right' }}>
                                    <Link href="/#">
                                        <a className="text-success" style={{ textDecoration: "none" }} onClick={() => handleShow6()}><b>Skip</b></a>
                                    </Link>
                                    &emsp;
                                    <Button variant="success" onClick={() => handleShow6()}><b>Next</b></Button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                :
                <></>
            }
            {show6 ?
                <Modal className="animationObject" show={show6} backdrop="static" keyboard={false} centered fullscreen={'xl-down'} size={'md'} animation={false}>
                    <Modal.Body className="px-5" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                        <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/d85b9cab000824a606c5beb5f3e27540.svg" alt="#ImgNotFound" />
                        <h3 className="mt-2">Where will your business be located?</h3>
                        <p className="text-secondary" style={{ fontSize: '18px' }}>We’ll use your location to set up your default shipping rates, recommended apps, and more.</p>
                        <h6>Store name(Optional)</h6>
                        <select className="w-100 form-control-lg">
                            <option value="India">India</option>
                            <option value="India">India</option>
                            <option value="India">India</option>
                            <option value="India">India</option>
                        </select>
                        <div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <b onClick={() => handleShow5()} style={{ cursor: 'pointer' }}>Back</b>
                                </div>
                                <div className="col-6" style={{ float: "right", textAlign: 'right' }}>
                                    <Link href="/#">
                                        <a className="text-success" style={{ textDecoration: "none" }} onClick={() => handleShow7()}><b>Skip</b></a>
                                    </Link>
                                    &emsp;
                                    <Button variant="success" onClick={() => handleShow7()}><b>Next</b></Button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                :
                <></>
            }
            {show7 ?
                <Modal className="animationObject" show={show7} backdrop="static" keyboard={false} centered fullscreen={'xl-down'} size={'md'} animation={false}>
                    <Modal.Body className="px-5" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                        <img src="https://shopify-assets.shopifycdn.com/shopifycloud/start-launch-web/assets/d85b9cab000824a606c5beb5f3e27540.svg" alt="#ImgNotFound" />
                        <h3 className="mt-2">Create a Shopify account</h3>
                        <p className="text-secondary" style={{ fontSize: '16px' }}>One last step before starting your free trial.</p>
                        <button type="button" className="btn w-100 login_btns mt-2" style={{ border: "1px solid #8C9196" }}>Continue with Email</button>
                        <button type="button" className="btn w-100 login_btns mt-2" style={{ border: "1px solid #8C9196" }}>Continue with Apple</button>
                        <button type="button" className="btn w-100 login_btns mt-2" style={{ border: "1px solid #8C9196" }}>Continue with Facebook</button>
                        <button type="button" className="btn w-100 login_btns mt-2" style={{ border: "1px solid #8C9196" }}>Continue with Google</button>

                        <p className="text-secondary mt-2" style={{ fontSize: '14px' }}>By proceeding, you agree to the Terms and Conditions</p>

                        <p className="text-secondary" style={{ fontSize: '14px' }}>Already have a Shopify account? <Link href="/"><a>Login</a></Link></p>

                        <div className="mt-5" style={{ textAlign: "right" }}>
                            <Link href="/"><a className="text-secondary"><b>Help</b></a></Link>&ensp;
                            <Link href="/"><a className="text-secondary"><b>Privacy</b></a></Link>&ensp;
                            <Link href="/"><a className="text-secondary"><b>Terms</b></a></Link>&ensp;
                        </div>
                    </Modal.Body>
                </Modal>
                :
                <></>
            }
        </div>
    )
}


