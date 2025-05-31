import './i18n';
import { useTranslation } from 'react-i18next';
import './App.css';

const App = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const redirectUrl = "https://iam.naql.sa/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3Dnaql_pro%26scope%3Dopenid%2520profile%2520email%2520roles%2520FirstName%26state%3DKw9c7U1HCSVRJycK9j6ocSxNh-gUuieYIg0yWfXsNaU%253D%26redirect_uri%3Dhttps%253A%252F%252Fnaql.logisti.sa%252Flogin%252Foauth2%252Fcode%252Fidsrv4%26code_challenge_method%3DS256%26nonce%3D0q544DbRm4H-QjH9LC8C00jvdttkerxx4X9oWJrSmv0%26code_challenge%3DZXwRaDPpgf6tIXefUmbfQ_CRMWuz7b1SgDRhwL2DWQI%26access_type%3Doffline";

  const handleButtonClick = () => {
    window.location.href = redirectUrl; // <mark>Redirect the user to the specified URL</mark>
  };
  return (
    <div className="container">
      {/* Main Title */}
      <h2 className="custom-title">{t('title')}</h2>

      <div className="bordered-content"> {/* <mark>New wrapper for bordered content</mark> */}
        {/* Owner/Co-Owner Info Section */}
        <div className="info-section">
          <div className="subtitle">{t('ownerInfo')}</div>
          <div className="info-grid-horizontal"> 
            <div className="info-item"> 
              <div className="info-label">{isArabic ? 'رقم الهوية' : 'ID Number'}</div>
              <div className="info-value">2583090713</div>
            </div>
            <div className="info-item"> 
              <div className="info-label">{isArabic ? 'الاسم' : 'Name'}</div>
              <div className="info-value">{t('name')}</div>
            </div>
          </div>
        </div>
        {/* <div className="info-section">
          <div className="subtitle">{t('ownerInfo')}</div>
          <div className="info-grid-vertical">
            <div className="info-block">
              <div className="info-label">{isArabic ? 'رقم الهوية' : 'ID Number'}</div>
              <div className="info-value">2583090713</div>
            </div>
            <div className="info-block">
              <div className="info-label">{isArabic ? 'الاسم' : 'Name'}</div>
              <div className="info-value">ARSALAN HUSSAIN MAZHARHUSSAINSHAKH</div>
            </div>
          </div>
        </div> */}

        <hr className="divider" />
        {/* Operation Card Info Section */}

        <div className="info-section">
          <div className="subtitle">{t('cardInfo')}</div>
          <div className="info-grid-horizontal"> 
            <div className="info-item"> 
              <div className="info-label">{isArabic ? 'رقم البطاقة' : 'Card Number'}</div>
              <div className="info-value"> 33.005195275</div>
            </div>
            <div className="info-item"> 
              <div className="info-label">{isArabic ? 'تاريخ إصدار البطاقة' : 'Card Issue Date'}</div>
              <div className="info-value">2025-04-15</div>
            </div>
            <div className="info-item"> 
              <div className="info-label">{isArabic ? 'تاريخ انتهاء البطاقة' : 'Card Expiry Date'}</div>
              <div className="info-value">2026-04-15</div>
            </div>
          </div>
        </div>
      
        <hr className="divider" />

        {/* Vehicle Info Section */}
         <div className="info-section">
          <div className="subtitle">{isArabic ? 'بيانات المركبة' : 'Vehicle Info'}</div>
          <div className="info-grid-horizontal"> 
            <div className="info-item"> 
              <div className="info-label">{isArabic ? 'الماركة:' : 'Maker:'}</div>
              <div className="info-value"> هونداي</div>
            </div>
            <div className="info-item"> 
              <div className="info-label">{isArabic ? 'الطراز:' : 'Model:'}</div>
              <div className="info-value">أكسبنت</div>
            </div>
            <div className="info-item"> 
              <div className="info-label">{isArabic ? 'رقم اللوحة:' : 'Plate Number:'}</div>
              <div className="info-value">6806KNJ</div>
            </div>
            <div className="info-item"> 
              <div className="info-label">{isArabic ? 'لون المركبة:' : 'Color:'}</div>
              <div className="info-value">أبيض</div>
            </div>
            <div className="info-item"> 
              <div className="info-label">{isArabic ? 'سنة الصنع:' : 'Model Year:'}</div>
              <div className="info-value">2016</div>
            </div>
          </div>
        </div>
      </div>
      
    <button className="custom-button" onClick={handleButtonClick}>{isArabic ? 'رجوع' : 'Back'}</button> {/* <mark>The button</mark> */}
    </div>
  );
};

export default App;