import React from 'react'

const Banner = () => {
  return (
    <div className='container'>
        <div className="content text-center">
            <div className="content_top bg-light my-5 rounded">
                <h2 className='fs-1 fw-bold'>A warm welcome!</h2>
                <p className='fs-4 my-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <button className='bg-primary text-white fs-5 px-3 py-2 rounded border border-white'>Call to action</button>
            </div>

            <div className="content_bot">
                {/* ITEM 1 */}
                <div className="item bg-light rounded px-5 pt-5 pb-4">
                    <i className="fa-solid fa-layer-group" />
                    <h3>Fresh new layout</h3>
                    <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                </div>

                {/* ITEM 2 */}
                <div className="item bg-light rounded px-5 pt-5 pb-4">
                    <i className="fa-solid fa-cloud-arrow-down" />
                    <h3>Free to download</h3>
                    <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                </div>

                {/* ITEM 3 */}
                <div className="item bg-light rounded px-5 pt-5 pb-4">
                    <i className="fa-regular fa-address-card"></i>
                    <h3>Jumbotron hero header</h3>
                    <p>The heroic part of this template is the jumbotron hero header!</p>
                </div>

                {/* ITEM 4 */}
                <div className="item bg-light rounded px-5 pt-5 pb-4">
                    <i className="fa-brands fa-bootstrap"></i>
                    <h3>Feature boxes</h3>
                    <p>We've created some custom feature boxes using Bootstrap icons!</p>
                </div>

                {/* ITEM 5 */}
                <div className="item bg-light rounded px-5 pt-5 pb-4">
                    <i className="fa-solid fa-code"></i>
                    <h3>Simple clean code</h3>
                    <p>We keep our dependencies up to date and squash bugs as they come!</p>
                </div>

                {/* ITEM 6 */}
                <div className="item bg-light rounded px-5 pt-5 pb-4">
                    <i className="fa-regular fa-square-check"></i>
                    <h3>A name you trust</h3>
                    <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner