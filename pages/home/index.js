import NavTopSection from '../../components/navTop/NavTop'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import PromiseSection from '../../components/promise/Promise'
import Carouselsection from '../../components/carousel/Carousel'
import GridSection from '../../components/grid/Grid'
import TestimonialSection from '../../components/testimonial/Testimonial'
import BrandSection from '../../components/brand/Brand'
import AttorneySection from '../../components/attorney/Attorney'
import AdviceSection from '../../components/advice/Advice'
import NewsSection from '../../components/news/News'
import ConsultingSection from '../../components/consulting/Consulting'
import FooterSection from '../../components/footer/Footer'


import { faScaleBalanced,faFireFlameCurved,faTruckMedical,faUserGroup,faMoneyBillWave,faLeaf,faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook ,faTwitter ,faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const index = () => {

    const menulinks=[
        {linkName:"#", name:"About Us +"},
        {linkName:"#", name:"Attorneys +"},
        {linkName:"#", name:"Case Study +"},
        {linkName:"#", name:"Practice Areas +"},
        {linkName:"#", name:"Contact"},
        {linkName:"#", name:"Faqs"}
      ];
    
      const carouselValues=[
        {iconLink:<FontAwesomeIcon icon={faScaleBalanced}/>, CarouselNum:"152", CarouselContent:"SuccessFul Cases"},
        {iconLink:<FontAwesomeIcon icon={faScaleBalanced}/>, CarouselNum:"312", CarouselContent:"Case Closed"},
        {iconLink:<FontAwesomeIcon icon={faScaleBalanced}/>, CarouselNum:"513", CarouselContent:"Trusted Client"},
        {iconLink:<FontAwesomeIcon icon={faScaleBalanced}/>, CarouselNum:"25",  CarouselContent:"Expert Team"}
      ];
    
      const gridlinks=[
        {clientH3:"Fire Accident", clientP:"Fugiat ullamco ullamco in et exercitation. Excepteur proident Sunt enim deserunt in", clientIcon:<FontAwesomeIcon icon={faScaleBalanced}/>},
        {clientH3:"Accident Emergencies", clientP:"Fugiat ullamco ullamco in et exercitation. Excepteur proident Sunt enim deserunt in", clientIcon:<FontAwesomeIcon icon={faFireFlameCurved}/>},
        {clientH3:"Family Law", clientP:"Fugiat ullamco ullamco in et exercitation. Excepteur proident Sunt enim deserunt in", clientIcon:<FontAwesomeIcon icon={faTruckMedical}/>},
        {clientH3:"Financial Law", clientP:"Fugiat ullamco ullamco in et exercitation. Excepteur proident Sunt enim deserunt in", clientIcon:<FontAwesomeIcon icon={faUserGroup}/>},
        {clientH3:"Drug Offenses", clientP:"Fugiat ullamco ullamco in et exercitation. Excepteur proident Sunt enim deserunt in", clientIcon:<FontAwesomeIcon icon={faMoneyBillWave}/>},
        {clientH3:"Civil Itigation", clientP:"Fugiat ullamco ullamco in et exercitation. Excepteur proident Sunt enim deserunt in", clientIcon:<FontAwesomeIcon icon={faLeaf}/>},
      ];
    
      const brandData=[
        {BrandIcon:<FontAwesomeIcon icon={faUserSecret}/>, BrandText:"Logoipsum"},
        {BrandIcon:<FontAwesomeIcon icon={faUserSecret}/>, BrandText:"Logoipsum"},
        {BrandIcon:<FontAwesomeIcon icon={faUserSecret}/>, BrandText:"Logoipsum"},
        {BrandIcon:<FontAwesomeIcon icon={faUserSecret}/>, BrandText:"Logoipsum"},
      ];
    
      const attorneyData=[
        {attorneyName:"Romeo Deol",attorneyPosition:"Ceo & Lawyer",attorneyIcons1:<FontAwesomeIcon icon={faFacebook}/>,
        attorneyIcons2:<FontAwesomeIcon icon={faTwitter}/>,
        attorneyIcons3:<FontAwesomeIcon icon={faYoutube}/>},
    
        {attorneyName:"Romeo Deol",attorneyPosition:"Ceo & Lawyer",attorneyIcons1:<FontAwesomeIcon icon={faFacebook}/>,
        attorneyIcons2:<FontAwesomeIcon icon={faTwitter}/>,
        attorneyIcons3:<FontAwesomeIcon icon={faYoutube}/>},
    
    
        {attorneyName:"Romeo Deol",attorneyPosition:"Ceo & Lawyer",attorneyIcons1:<FontAwesomeIcon icon={faFacebook}/>,
        attorneyIcons2:<FontAwesomeIcon icon={faTwitter}/>,
        attorneyIcons3:<FontAwesomeIcon icon={faYoutube}/>},
    
    
        {attorneyName:"Romeo Deol",attorneyPosition:"Ceo & Lawyer",attorneyIcons1:<FontAwesomeIcon icon={faFacebook}/>,
        attorneyIcons2:<FontAwesomeIcon icon={faTwitter}/>,
        attorneyIcons3:<FontAwesomeIcon icon={faYoutube}/>},
    
      ];
    
      const newsData=[
        {NewsName:"By jenny doel", NewsContent:"Why legal research is the only skill you really need"},
        {NewsName:"By jenny doel", NewsContent:"Why legal research is the only skill you really need"},
        {NewsName:"By jenny doel", NewsContent:"Why legal research is the only skill you really need"},
      ];
    

    return (
    <>
    <NavTopSection/>

    <Header toplinks={menulinks}/>

    <Banner/>

    <PromiseSection/>

    <Carouselsection carouselItems={carouselValues}/>

    <GridSection clientLinks={gridlinks}/>

    <TestimonialSection/>

    <BrandSection BrandLinks={brandData}/>

    <AttorneySection  AttorneyLinks={attorneyData}/>

    <AdviceSection/>

    <NewsSection NewsLinks={newsData}/>

    <ConsultingSection/>

    <FooterSection/>

    </>
    )
}

export default index