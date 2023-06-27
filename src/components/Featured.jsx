import React from 'react'
import FeaturedBox from './FeaturedBox'

const Featured = () => {
  return (
    <div className='row'>
        <FeaturedBox img="https://moonlightedu.com.np/uploads/choose/1680021503.png" title="Visa Process" desc="Our visa team will assist you throughout the entire visa process from documentation to the visa interview, we take care of it all for you!"/>

        <FeaturedBox img="https://moonlightedu.com.np/uploads/choose/1680021459.png" title="Acceptance Letter" desc="As soon as you submit your application, the university will issue an offer letter. We will keep you updated on each step, so you can get a final acceptance letter." />
        <FeaturedBox img="https://moonlightedu.com.np/uploads/choose/1680021503.png" title="Visa Process" desc="Our visa team will assist you throughout the entire visa process from documentation to the visa interview, we take care of it all for you!"/>

        <FeaturedBox img="https://moonlightedu.com.np/uploads/choose/1680021459.png" title="Acceptance Letter" desc="As soon as you submit your application, the university will issue an offer letter. We will keep you updated on each step, so you can get a final acceptance letter." />
    </div>
  )
}

export default Featured