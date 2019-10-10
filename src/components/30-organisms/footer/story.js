/* global document */
// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/html';
import './index';
import withNoBorder from '../../../../.storybook/addons/no-border';
import Readme from './README.md';

storiesOf('Organisms/Footer', module)
  .addDecorator(withNoBorder)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })

  .add(
    'Footer',
    () =>
      `<axa-footer>
      <span class="axa-aem-editmode__indicator">footer</span>

     
      <h2 slot="column-title">
        AXA &amp; Sie
        
      </h2>
    
         
      
    
    
    
        
            
            
            <div class="m-footer-links__list-item__deco cq-Editable-dom">
      <span class="axa-aem-editmode__indicator">footer link </span>
    
      
      <a slot="column-item" href="/content/axa/de/privatkunden/kontakt-services/kontakt/allgemeiner-kontakt.html">
        
        Kontakt
      </a>
    
    <!--cq{"decorated":true,"type":"axa/sites/components/navigation/footerlink","path":"/content/axa/de/jcr:content/footercol1/footerlink","selectors":null,"servlet":"Script /apps/axa/sites/components/navigation/footerlink/footerlink.html","totalTime":1,"selfTime":1}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/footerlink" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink.html&quot;,&quot;dialog&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/cq:dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;auto&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/mnt/override/apps/axa/sites/components/navigation/footerlink/_cq_dialog.html/content/axa/de/jcr:content/footercol1/footerlink&quot;,&quot;dialogClassic&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/dialog&quot;,&quot;type&quot;:&quot;axa/sites/components/navigation/footerlink&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/footerlink&quot;,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;,{&quot;xtype&quot;:&quot;tbseparator&quot;},&quot;CQ.wcm.EditBase.DELETE&quot;,&quot;CQ.wcm.EditBase.INSERT&quot;,&quot;CQ.wcm.EditBase.COPYMOVE&quot;]}}"></cq>
    </div>
    
        
            
            
            <div class="m-footer-links__list-item__deco cq-Editable-dom">
      <span class="axa-aem-editmode__indicator">footer link </span>
    
      
      <a slot="column-item" href="/content/axa/de/privatkunden/schaden/rund-um-den-schaden/schaden-melden.html">
        
        Schaden melden
      </a>
    
    <!--cq{"decorated":true,"type":"axa/sites/components/navigation/footerlink","path":"/content/axa/de/jcr:content/footercol1/footerlink_1942148916","selectors":null,"servlet":"Script /apps/axa/sites/components/navigation/footerlink/footerlink.html","totalTime":1,"selfTime":1}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/footerlink_1942148916" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_1942148916&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_1942148916.html&quot;,&quot;dialog&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/cq:dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;auto&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/mnt/override/apps/axa/sites/components/navigation/footerlink/_cq_dialog.html/content/axa/de/jcr:content/footercol1/footerlink_1942148916&quot;,&quot;dialogClassic&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/dialog&quot;,&quot;type&quot;:&quot;axa/sites/components/navigation/footerlink&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/footerlink&quot;,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;,{&quot;xtype&quot;:&quot;tbseparator&quot;},&quot;CQ.wcm.EditBase.DELETE&quot;,&quot;CQ.wcm.EditBase.INSERT&quot;,&quot;CQ.wcm.EditBase.COPYMOVE&quot;]}}"></cq>
    </div>
    
        
            
            
            <div class="m-footer-links__list-item__deco cq-Editable-dom">
      <span class="axa-aem-editmode__indicator">footer link </span>
    
      
      <a slot="column-item" href="/content/axa/de/ueber-axa/jobs-karriere/stellenangebote/offene-stellen.html">
        
        Stellenangebote
      </a>
    
    <!--cq{"decorated":true,"type":"axa/sites/components/navigation/footerlink","path":"/content/axa/de/jcr:content/footercol1/footerlink_1885502741","selectors":null,"servlet":"Script /apps/axa/sites/components/navigation/footerlink/footerlink.html","totalTime":1,"selfTime":1}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/footerlink_1885502741" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_1885502741&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_1885502741.html&quot;,&quot;dialog&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/cq:dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;auto&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/mnt/override/apps/axa/sites/components/navigation/footerlink/_cq_dialog.html/content/axa/de/jcr:content/footercol1/footerlink_1885502741&quot;,&quot;dialogClassic&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/dialog&quot;,&quot;type&quot;:&quot;axa/sites/components/navigation/footerlink&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/footerlink&quot;,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;,{&quot;xtype&quot;:&quot;tbseparator&quot;},&quot;CQ.wcm.EditBase.DELETE&quot;,&quot;CQ.wcm.EditBase.INSERT&quot;,&quot;CQ.wcm.EditBase.COPYMOVE&quot;]}}"></cq>
    </div>
    
        
            
            
            <div class="m-footer-links__list-item__deco cq-Editable-dom">
      <span class="axa-aem-editmode__indicator">footer link </span>
    
      
      <a slot="column-item" href="https://www.axa.ch/content/dam/axa/newsdesk-de/index.html#/">
        
        Medien
      </a>
    
    <!--cq{"decorated":true,"type":"axa/sites/components/navigation/footerlink","path":"/content/axa/de/jcr:content/footercol1/footerlink_1812972909","selectors":null,"servlet":"Script /apps/axa/sites/components/navigation/footerlink/footerlink.html","totalTime":2,"selfTime":2}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/footerlink_1812972909" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_1812972909&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_1812972909.html&quot;,&quot;dialog&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/cq:dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;auto&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/mnt/override/apps/axa/sites/components/navigation/footerlink/_cq_dialog.html/content/axa/de/jcr:content/footercol1/footerlink_1812972909&quot;,&quot;dialogClassic&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/dialog&quot;,&quot;type&quot;:&quot;axa/sites/components/navigation/footerlink&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/footerlink&quot;,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;,{&quot;xtype&quot;:&quot;tbseparator&quot;},&quot;CQ.wcm.EditBase.DELETE&quot;,&quot;CQ.wcm.EditBase.INSERT&quot;,&quot;CQ.wcm.EditBase.COPYMOVE&quot;]}}"></cq>
    </div>
    
        
            
            
            <div class="m-footer-links__list-item__deco cq-Editable-dom">
      <span class="axa-aem-editmode__indicator">footer link </span>
    
      
      <a slot="column-item" href="/content/axa/de/informationen/broker-services.html">
        
        Broker
      </a>
    
    <!--cq{"decorated":true,"type":"axa/sites/components/navigation/footerlink","path":"/content/axa/de/jcr:content/footercol1/footerlink_1479659263","selectors":null,"servlet":"Script /apps/axa/sites/components/navigation/footerlink/footerlink.html","totalTime":1,"selfTime":1}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/footerlink_1479659263" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_1479659263&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_1479659263.html&quot;,&quot;dialog&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/cq:dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;auto&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/mnt/override/apps/axa/sites/components/navigation/footerlink/_cq_dialog.html/content/axa/de/jcr:content/footercol1/footerlink_1479659263&quot;,&quot;dialogClassic&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/dialog&quot;,&quot;type&quot;:&quot;axa/sites/components/navigation/footerlink&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/footerlink&quot;,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;,{&quot;xtype&quot;:&quot;tbseparator&quot;},&quot;CQ.wcm.EditBase.DELETE&quot;,&quot;CQ.wcm.EditBase.INSERT&quot;,&quot;CQ.wcm.EditBase.COPYMOVE&quot;]}}"></cq>
    </div>
    
        
            
            
            <div class="m-footer-links__list-item__deco cq-Editable-dom">
      <span class="axa-aem-editmode__indicator">footer link </span>
    
      
      <a slot="column-item" href="https://myaxa.axa.ch/myaxa" target="_blank">
        
        myAXA
      </a>
    
    <!--cq{"decorated":true,"type":"axa/sites/components/navigation/footerlink","path":"/content/axa/de/jcr:content/footercol1/footerlink_794133338","selectors":null,"servlet":"Script /apps/axa/sites/components/navigation/footerlink/footerlink.html","totalTime":1,"selfTime":1}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/footerlink_794133338" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_794133338&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_794133338.html&quot;,&quot;dialog&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/cq:dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;auto&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/mnt/override/apps/axa/sites/components/navigation/footerlink/_cq_dialog.html/content/axa/de/jcr:content/footercol1/footerlink_794133338&quot;,&quot;dialogClassic&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/dialog&quot;,&quot;type&quot;:&quot;axa/sites/components/navigation/footerlink&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/footerlink&quot;,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;,{&quot;xtype&quot;:&quot;tbseparator&quot;},&quot;CQ.wcm.EditBase.DELETE&quot;,&quot;CQ.wcm.EditBase.INSERT&quot;,&quot;CQ.wcm.EditBase.COPYMOVE&quot;]}}"></cq>
    </div>
    
        
            
            
            <div class="m-footer-links__list-item__deco cq-Editable-dom">
      <span class="axa-aem-editmode__indicator">footer link </span>
    
      
      <a slot="column-item" href="/content/garagen/de/garagen-portal.html">
        
        Garagen-Portal
      </a>
    
    <!--cq{"decorated":true,"type":"axa/sites/components/navigation/footerlink","path":"/content/axa/de/jcr:content/footercol1/footerlink_2098239130","selectors":null,"servlet":"Script /apps/axa/sites/components/navigation/footerlink/footerlink.html","totalTime":3,"selfTime":3}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/footerlink_2098239130" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_2098239130&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_2098239130.html&quot;,&quot;dialog&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/cq:dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;auto&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/mnt/override/apps/axa/sites/components/navigation/footerlink/_cq_dialog.html/content/axa/de/jcr:content/footercol1/footerlink_2098239130&quot;,&quot;dialogClassic&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/dialog&quot;,&quot;type&quot;:&quot;axa/sites/components/navigation/footerlink&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/footerlink&quot;,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;,{&quot;xtype&quot;:&quot;tbseparator&quot;},&quot;CQ.wcm.EditBase.DELETE&quot;,&quot;CQ.wcm.EditBase.INSERT&quot;,&quot;CQ.wcm.EditBase.COPYMOVE&quot;]}}"></cq>
    </div>
    
        
            
            
            <div class="m-footer-links__list-item__deco cq-Editable-dom">
      <span class="axa-aem-editmode__indicator">footer link </span>
    
      
      <a slot="column-item" href="https://www.axa.ch/de/ueber-axa/reviews.html">
        
        Kundenbewertungen
      </a>
    
    <!--cq{"decorated":true,"type":"axa/sites/components/navigation/footerlink","path":"/content/axa/de/jcr:content/footercol1/footerlink_1467459294","selectors":null,"servlet":"Script /apps/axa/sites/components/navigation/footerlink/footerlink.html","totalTime":1,"selfTime":1}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/footerlink_1467459294" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_1467459294&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_1467459294.html&quot;,&quot;dialog&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/cq:dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;auto&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/mnt/override/apps/axa/sites/components/navigation/footerlink/_cq_dialog.html/content/axa/de/jcr:content/footercol1/footerlink_1467459294&quot;,&quot;dialogClassic&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/dialog&quot;,&quot;type&quot;:&quot;axa/sites/components/navigation/footerlink&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/footerlink&quot;,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;,{&quot;xtype&quot;:&quot;tbseparator&quot;},&quot;CQ.wcm.EditBase.DELETE&quot;,&quot;CQ.wcm.EditBase.INSERT&quot;,&quot;CQ.wcm.EditBase.COPYMOVE&quot;]}}"></cq>
    </div>
    
        
            
            
            <div class="par iparys_inherited cq-Editable-dom cq-Editable-dom--container">
    
        
        
        <div class="cq-placeholder cq-marker-start" data-emptytext="Inherited Paragraph System"></div>
        
    
    <!--cq{"decorated":true,"type":"wcm/foundation/components/iparsys/par","path":"/content/axa/de/jcr:content/footercol1/iparsys_fake_par","selectors":null,"servlet":"Script /libs/wcm/foundation/components/iparsys/par/par.html","totalTime":46,"selfTime":46}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/iparsys_fake_par" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/iparsys_fake_par&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/iparsys_fake_par.html&quot;,&quot;dialog&quot;:&quot;/libs/wcm/foundation/components/iparsys/par/dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;inline&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/libs/cq/gui/components/authoring/compat/content/dialog.html?dialog=%2Flibs%2Fwcm%2Ffoundation%2Fcomponents%2Fiparsys%2Fpar%2Fdialog&amp;content=%2Fcontent%2Faxa%2Fde%2Fjcr%3Acontent%2Ffootercol1%2Fiparsys_fake_par&quot;,&quot;dialogClassic&quot;:&quot;/libs/wcm/foundation/components/iparsys/par/dialog&quot;,&quot;type&quot;:&quot;wcm/foundation/components/iparsys/par&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/par&quot;,&quot;isContainer&quot;:true,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;actions&quot;:[{&quot;xtype&quot;:&quot;tbtext&quot;,&quot;text&quot;:&quot;Inherited Paragraphs&quot;}],&quot;disableTargeting&quot;:true}}"></cq>
    </div>
    
        
            
            
            <div class="m-footer-links__list-item__deco cq-Editable-dom">
      <span class="axa-aem-editmode__indicator">footer link </span>
    
      
      <a slot="column-item" href="https://www.axa.ch/de/privatkunden/kampagnen/newsletter/subscribe/axa.html">
        
        Newsletter abonnieren
      </a>
    
    <!--cq{"decorated":true,"type":"axa/sites/components/navigation/footerlink","path":"/content/axa/de/jcr:content/footercol1/footerlink_363123727","selectors":null,"servlet":"Script /apps/axa/sites/components/navigation/footerlink/footerlink.html","totalTime":0,"selfTime":0}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/footerlink_363123727" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_363123727&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/footerlink_363123727.html&quot;,&quot;dialog&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/cq:dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;auto&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/mnt/override/apps/axa/sites/components/navigation/footerlink/_cq_dialog.html/content/axa/de/jcr:content/footercol1/footerlink_363123727&quot;,&quot;dialogClassic&quot;:&quot;/apps/axa/sites/components/navigation/footerlink/dialog&quot;,&quot;type&quot;:&quot;axa/sites/components/navigation/footerlink&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/footerlink&quot;,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;,{&quot;xtype&quot;:&quot;tbseparator&quot;},&quot;CQ.wcm.EditBase.DELETE&quot;,&quot;CQ.wcm.EditBase.INSERT&quot;,&quot;CQ.wcm.EditBase.COPYMOVE&quot;]}}"></cq>
    </div>
    
        
            
            
            <div class="newpar new section cq-Editable-dom">
    
    <!--cq{"decorated":true,"type":"wcm/foundation/components/iparsys/newpar","path":"/content/axa/de/jcr:content/footercol1/*","selectors":null,"servlet":"Script /libs/wcm/foundation/components/parsys/newpar/newpar.html","totalTime":9,"selfTime":9}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1/*" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1/*&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1/*.html&quot;,&quot;type&quot;:&quot;wcm/foundation/components/iparsys/newpar&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys/newpar&quot;,&quot;editConfig&quot;:{&quot;actions&quot;:[null,&quot;CQ.wcm.EditBase.INSERT&quot;],&quot;disableTargeting&quot;:true}}"></cq>
    </div>
    
        
    
    <!--cq{"decorated":true,"type":"wcm/foundation/components/iparsys","path":"/content/axa/de/jcr:content/footercol1","selectors":null,"servlet":"Script /libs/wcm/foundation/components/iparsys/iparsys.html","totalTime":125,"selfTime":59}-->
    <cq data-path="/content/axa/de/jcr:content/footercol1" data-config="{&quot;path&quot;:&quot;/content/axa/de/jcr:content/footercol1&quot;,&quot;slingPath&quot;:&quot;/content/axa/de/jcr:content/footercol1.html&quot;,&quot;dialog&quot;:&quot;/libs/wcm/foundation/components/iparsys/cq:dialog&quot;,&quot;dialogLoadingMode&quot;:&quot;auto&quot;,&quot;dialogLayout&quot;:&quot;auto&quot;,&quot;dialogSrc&quot;:&quot;/mnt/override/libs/wcm/foundation/components/iparsys/_cq_dialog.html/content/axa/de/jcr:content/footercol1&quot;,&quot;dialogClassic&quot;:&quot;/libs/wcm/foundation/components/iparsys/dialog&quot;,&quot;designDialog&quot;:&quot;/libs/wcm/foundation/components/parsys/cq:design_dialog&quot;,&quot;designDialogLayout&quot;:&quot;auto&quot;,&quot;designDialogLoadingMode&quot;:&quot;auto&quot;,&quot;designDialogSrc&quot;:&quot;/mnt/override/libs/wcm/foundation/components/parsys/_cq_design_dialog.html/etc/designs/axa/sites/jcr:content/configurationpage/footercol1?referrer=%2Fcontent%2Faxa%2Fde&amp;primaryType=nt%3Aunstructured&quot;,&quot;designDialogClassic&quot;:&quot;/libs/wcm/foundation/components/parsys/design_dialog&quot;,&quot;type&quot;:&quot;wcm/foundation/components/iparsys&quot;,&quot;isResponsiveGrid&quot;:false,&quot;csp&quot;:&quot;configurationpage|abstractcontentpage|abstractpage|page|basicpage/footercol1|iparsys|parsys&quot;,&quot;isContainer&quot;:true,&quot;editConfig&quot;:{&quot;xtype&quot;:&quot;editbar&quot;,&quot;listeners&quot;:{&quot;afteredit&quot;:&quot;REFRESH_PARENT&quot;},&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;],&quot;disableTargeting&quot;:true},&quot;ipeConfig&quot;:{&quot;jcr:primaryType&quot;:&quot;nt:unstructured&quot;,&quot;jcr:lastModifiedBy&quot;:&quot;admin&quot;,&quot;components&quot;:&quot;group:AXA Footer&quot;,&quot;jcr:lastModified&quot;:&quot;java.util.GregorianCalendar[time=1455627600000,areFieldsSet=true,areAllFieldsSet=true,lenient=false,zone=sun.util.calendar.ZoneInfo[id=\&quot;GMT+02:00\&quot;,offset=7200000,dstSavings=0,useDaylight=false,transitions=0,lastRule=null],firstDayOfWeek=1,minimalDaysInFirstWeek=1,ERA=1,YEAR=2016,MONTH=1,WEEK_OF_YEAR=8,WEEK_OF_MONTH=3,DAY_OF_MONTH=16,DAY_OF_YEAR=47,DAY_OF_WEEK=3,DAY_OF_WEEK_IN_MONTH=3,AM_PM=1,HOUR=3,HOUR_OF_DAY=15,MINUTE=0,SECOND=0,MILLISECOND=0,ZONE_OFFSET=7200000,DST_OFFSET=0]&quot;},&quot;childConfig&quot;:{&quot;actions&quot;:[&quot;CQ.wcm.EditBase.EDIT&quot;,&quot;CQ.wcm.EditBase.DELETE&quot;,&quot;CQ.wcm.EditBase.INSERT&quot;]}}"></cq>
    
      
    
    
         
      <h2 slot="column-title">
        AXA weltweit
        
      </h2>
    
         
      <a slot="column-item" href="http://www.axa.com" target="_blank">
        AXA weltweit
        
      </a>
    
    
         
      <h2 slot="social-title">In Kontakt bleiben</h2>
      <a slot="social-item" href="https://de-de.facebook.com/AXACH/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M8.865 9.043H6.213v3.473h2.652v10.42h4.452v-10.42h3.274l.31-3.473h-3.584V7.634c0-.832.164-1.152.982-1.152h2.57V2.096h-3.388c-3.274 0-4.616 1.377-4.616 4.002v2.945z" fill="#FFFFFF"></path></svg>
      </a>
      <a slot="social-item" href="https://www.instagram.com/axaswitzerland/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><g transform="translate(1 1)" fill="#FFFFFF"><circle cx="10.931" cy="10.931" r="3.644"></circle><path d="M21.794 6.428a6.033 6.033 0 0 0-6.36-6.36H6.428a6.033 6.033 0 0 0-6.36 6.36v9.006a6.033 6.033 0 0 0 6.36 6.36h9.006a6.033 6.033 0 0 0 6.36-6.36v-4.503c0-2.973.051-3.334 0-4.503zm-16.81 4.503a5.947 5.947 0 1 1 11.894 0 5.947 5.947 0 0 1-11.894 0zm10.91-5.653a1.306 1.306 0 1 1 2.414-1 1.306 1.306 0 0 1-2.413 1z"></path></g></svg>
      </a>
      <a slot="social-item" href="https://twitter.com/axa_schweiz" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M22.748 5.267a8.861 8.861 0 0 1-2.548.705 4.449 4.449 0 0 0 1.962-2.468 8.88 8.88 0 0 1-2.817 1.074 4.44 4.44 0 0 0-5.356-.897 4.452 4.452 0 0 0-2.225 4.96 12.604 12.604 0 0 1-9.138-4.65 4.453 4.453 0 0 0 1.375 5.944 4.422 4.422 0 0 1-2.013-.554 4.448 4.448 0 0 0 3.555 4.416 4.438 4.438 0 0 1-1.995.15 4.444 4.444 0 0 0 4.142 3.09 8.912 8.912 0 0 1-6.574 1.847 12.612 12.612 0 0 0 13.16.28 12.648 12.648 0 0 0 6.258-11.597 9.045 9.045 0 0 0 2.213-2.3z" fill="#FFFFFF"></path></svg>
      </a>
      <a slot="social-item" href="https://www.xing.com/companies/AXAWINTERTHUR" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M17.638 2.04c-.43 0-.619.268-.768.545 0 0-6.206 10.933-6.385 11.29l4.07 7.46c.14.258.36.546.798.546h2.874c.18 0 .309-.07.379-.179.08-.129.08-.287 0-.446l-4.06-7.39L20.92 2.664a.474.474 0 0 0 .01-.447.458.458 0 0 0-.389-.178M5.546 5.958c-.17 0-.319.05-.389.179-.08.129-.07.278.02.436l1.936 3.373-3.053 5.358a.576.576 0 0 0 0 .446c.07.119.2.179.369.179h2.883c.43 0 .639-.278.788-.546 0 0 2.983-5.258 3.103-5.456L9.228 6.504c-.14-.258-.36-.546-.808-.546" fill="#FFFFFF"></path></svg>
      </a>
      <a slot="social-item" href="https://www.youtube.com/axaschweiz" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M18.797 4.185c-3.25-.216-10.469-.216-13.719 0-3.516.23-3.922 2.323-3.953 7.815-.031 5.492.438 7.585 3.953 7.815 3.234.216 10.469.216 13.719 0 3.515-.23 3.922-2.323 3.953-7.815.031-5.492-.438-7.585-3.953-7.815zM9.234 15.554V8.446L16.438 12l-7.204 3.554z" fill="#FFFFFF"></path></svg>
      </a>
      <a slot="social-item" href="https://www.linkedin.com/company/axa/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M6.519 4.183A2.146 2.146 0 0 1 4.354 6.3a2.147 2.147 0 0 1-2.121-2.16A2.147 2.147 0 0 1 4.376 2a2.14 2.14 0 0 1 1.527.641c.403.41.625.966.616 1.542zm0 3.9H2.216V22h4.32L6.519 8.083zm6.878 0h-4.27V22h4.287v-7.3c0-4.05 5.2-4.383 5.2 0V22h4.303v-8.817c0-6.833-7.692-6.666-9.503-3.216l-.017-1.884z" fill="#FFFFFF"></path></svg>
      </a>
      </axa-footer>`
  );
