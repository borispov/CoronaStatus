import { Heading, Button, Paragraph, FadeIn, simpleWrapper, Container } from '../components/S'
import HeaderDescription from '../components/HeaderDescription'
import Head from 'next/head'


// const someHeader = `When I am not practicing web development and doing geeky stuff, I am usually concerned with either work or family. I am a father of a wonderful little girl whose at the moment of writing is 1y10m old, and a Husband with a lovely, supporting and loving wife who has been a part of assembling this project from day [0]. At work, I'm practicing as a social worker in the mental health field, a place that reminds me the importance of humility`


const welcomeEng = 'The goal of this project is to provide resources for people to cope with Coronavirus, be it link for online activities, important news, psychological methods to help with regulating anxiety and overwhelming emotions.'

const welcomeHeb = 'מטרת הפרויקט הזה הינה לספק משאבים ומידע עבור אנשים להתמודדות יומיומית עם נגיף הקורונה והשלכותיו, היה זה בדמוי רעיונות ולינקים לפעילויות, חדשות חשובות, טכניקות לוויסות החרדה והתמודדות עם חוסר ודאות וחוסר אונים.'

const lastPara = <>אתר זה נוצר מתוך צורך למקום מאורגן עבור כל המידע היקר המוזרם כל יום בקבוצות הוואטסאפ השונות שלנו והולך לאיבוד לאחר מספר דקות או שעות במקרה הטוב. נוסף לכך, האתר מספק מקום להתעדכן במספרים הרלוונטיים של נגיף הקורונה בארץ ובעולם, ומקנה יכולת לשלוט במינון ההתעדכנות, וזאת במקום לדבוק במסך הטלויזיה מול החדשות אשר לעתים קרובות רק מעלות לחצים מיותרים ואווירה שלילית בבית.</>

export default ({ isHeb }) => {


  const welcome = isHeb && welcomeHeb || welcomeEng

  return (
    <div>
      <FadeIn duration='0.2s' delay="0.1s">
        <Container style={{ direction: 'ltr', marginBottom: '62px' }}>
          <Heading style={{ textAlign: 'center'}} > Bonjour!</Heading>
          <HeaderDescription txt={welcome} />

        
        <Paragraph rtl mw='820px' style={{ margin: '0 auto'}} >
          { isHeb ?
            <>כל המידע המסופק באתר מגיע ממקורות כגון: <strong><em><small>WHO.int, worldometers, ourwourldindata.org</small></em></strong> ואתרים ממשלתיים שונים.</>
            : <>
              All information provided is legal.
              The data is gathered through free sources like:<br/> <strong>WHO</strong>, <strong>worldometers</strong>, <strong>ourwourldindata</strong> and government health ministry websites.
            </>
          }
          <br />
          { isHeb 
              ? 'מאגר המידע מוזרם מקובץ csv שיתופי אשר עובר בין אנשים. אם ברשותכם מידע שתרצו לשתף, צרו קשר בכדי לקבל קישור לקובץ.'
              : 'Resources section is a handmade csv file shared between colleagues and people with valuable information to share.'
          }
          <br />
          { isHeb
              ? 'נוסף לכך, הינכם מוזמנים לקחת חלק בפרויקט ולתרום את חלקיכם ע״י השארת פידבק, השארת טיפ דרך עמוד התרומה, או לעזור עם אחזקת האתר.'
              : <>If you like to contribute, say hi or leave feedback you can accomplish that either by <a href="https://ncorona.live/Coffee">Supporting</a> or email. Let me know what you like and don\'t like.
              You can <a href="mailto:nCoronaLive@gmail.com"> Mail Me </a></>
          }
          <br />
          <br />
          { isHeb && <>ניתן ליצור קשר דרך המייל: <a href="mailto:nCoronaLive@gmail.com">nCoronaLive@gmail.com</a></> }

          <br />
          <br />
          <br />
          <h1 style={{ textAlign: 'center' }} > nCorona's BIO</h1>
          { isHeb 
              ? lastPara
              : 'This website was created out of a need for an organized source of useful information nowadays, living in the shadow of Coronavirus. Plenty of useful shareable links are streamed through WhatsApp groups that are lost within minutes. Beside that, I find that having one place to look at and catch up with updated data regarding Covid19 casualties and recoveries is key to avoid unnecessary stress related with watching the News channels non-stop.'
          }
          </Paragraph>
          <br />

    </Container>

    <HeaderDescription txt={'This website is created by Boris Povolotsky'} />
      </FadeIn>
    </div>
  )

}
