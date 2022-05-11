import React from 'react'
import { Button } from 'react-bootstrap';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
export default function Checkout({amount}) {
    const router = useRouter()
    const user = useSelector(state => state.auth)
    const config = {
        public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: amount,
      currency: "USD",
      payment_options: "card, banktransfer, ussd",
      redirect_url: "https://ecommerce-next-js-three.vercel.app/cart",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: user.email,
        phone_number: "123456789",
        name: "Valued Tester",
      },
      customizations: {
        title: "The EazyShop",
        description: "Payment for choice products",
        logo: "https://images.unsplash.com/photo-1652255930759-30eebb42368a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    };
    const handleFlutterPayment = useFlutterwave(config);
  return (
    <>
        <Button className='text-light fw-light w-100 text-uppercase mt-2' 
            onClick={() => {
                if (!user.isLoggedIn){
                    router.push("/customer/account/login")
                }
                else{
                    handleFlutterPayment({
                        callback: (response) => {
                           console.log(response);
                            closePaymentModal() // this will close the modal programmatically
                        },
                        onClose: () => {},
                      });
                }
              }}
        >
            checkout ($ {amount})
            </Button>
    </>
  )
}
