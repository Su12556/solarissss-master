import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import './MainBanner.scss';
import BannerContent from './BannerContent';
// import BannerContent from '../BannerContent';

export default function MainBanner() {
  const text = _('Discount ${discount} For All Orders Over ${price}', {
    discount: '20%',
    price: '$2000'
  });
  return (
//     <div className="main-banner-home flex items-center">
//       <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div />
//         <div className="text-center md:text-left px-8 ">
//           <h2 className="h1 ">{text}</h2>
       
//           <a href="/women/ketanvyas" className='primary' type='text'>
//   <button>Pre Order Now</button>
// </a>

//         </div>
//       </div>
//     </div>

<section id="bannerSection">
<BannerContent />
</section>


  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
