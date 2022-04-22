import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Card } from 'react-bootstrap'

export default function Category({styles, image, category}) {
  return (
    <>
        <Card className='col-12 col-md-4 border-0'>
            <Link href={`/collections/${category}`}>
                <a>
                    <div className={styles.card_img}>
                        <Image src={image} alt=""/>
                    </div>
                    <Card.Body>
                        <Card.Text>
                            <p className='text-capitalize'>{category}</p>
                        </Card.Text>
                    </Card.Body>
                </a>
            </Link>
        </Card>
    </>
  )
}
