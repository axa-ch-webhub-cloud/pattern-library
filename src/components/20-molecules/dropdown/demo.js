import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Changelog from './CHANGELOG.md';
import './index';

storiesOf('Examples/Dropdown/Pure HTML', module)
  .addParameters({
    changelog: Changelog,
  })
  .add(
    'In a form',
    () => `<form id="dropdown-form" onsubmit="event.preventDefault();document.getElementById('form-data').open=true;document.getElementById('form-data-lang').textContent=(new FormData(this)).get('lang')">
    <fieldset>
    <legend>Language</legend>
    <axa-dropdown data-test-id="dropdown-forms" name="lang" defaulttitle="Please select language" onchange="document.getElementById('dropdown-form').title += event.detail.value + ',' + event.detail.index + ' '"
    items='[
    {"name": "Deutsch", "value": "DE" },
    {"name": "Français", "value": "FR" },
    {"name": "Italiano", "value": "IT" }
    ]' style="margin-bottom: 1rem"></axa-dropdown>
    <axa-button type="submit">OK</axa-button>
    <details id="form-data" style="display: inline-block;margin-left: 2rem">
    <summary style="background:rgb(0,0,143);color:#fff;padding:11px;font-family:sans-serif;outline:none">form content</summary>
    <div style="display:table; padding: 5px 0">lang = <span id="form-data-lang"></span></div>
    </details>
    </fieldset>
    </form>
    `
  )
  .add('Items delayed and numeric values', () => {
    const label = text('label', '');
    const value = text('value', '');
    const name = text('name', '');
    const invalid = boolean('invalid', false);
    const defaultTitle = text('defaulttitle', '');
    const error = text('error', 'Error Message');
    const native = boolean('native', false);
    const required = boolean('required', false);
    const checkMark = boolean('checkmark', false);
    const disabled = boolean('disabled', false);
    const dataTestId = text('data-test-id', '');

    const wrapper = document.createElement('div');
    const template = html`
      <axa-dropdown
        value="${value}"
        label="${label}"
        name="${name}"
        datatestid="${dataTestId}"
        defaulttitle="${defaultTitle}"
        error="${error}"
        ?invalid="${invalid}"
        ?checkmark="${checkMark}"
        ?disabled="${disabled}"
        ?required="${required}"
        ?native="${native}"
      ></axa-dropdown>
    `;

    setTimeout(() => {
      document.querySelector('axa-dropdown').setAttribute(
        'items',
        JSON.stringify([
          { name: 'Item 1', value: '', selected: true },
          { name: 'Item 2', value: 1 },
          { name: 'Item 3', value: 2 },
        ])
      );
    }, 2000);

    render(template, wrapper);
    return wrapper;
  })
  .add('Dropdown with lots of options', () => {
    const wrapper = document.createElement('div');
    const items = [
      { value: 'AF', name: 'Afghanistan' },
      { value: 'AX', name: 'Åland Islands' },
      { value: 'AL', name: 'Albania' },
      { value: 'DZ', name: 'Algeria' },
      { value: 'AS', name: 'American Samoa' },
      { value: 'AD', name: 'Andorra' },
      { value: 'AO', name: 'Angola' },
      { value: 'AI', name: 'Anguilla' },
      { value: 'AQ', name: 'Antarctica' },
      { value: 'AG', name: 'Antigua and Barbuda' },
      { value: 'AR', name: 'Argentina' },
      { value: 'AM', name: 'Armenia' },
      { value: 'AW', name: 'Aruba' },
      { value: 'AU', name: 'Australia' },
      { value: 'AT', name: 'Austria' },
      { value: 'AZ', name: 'Azerbaijan' },
      { value: 'BS', name: 'Bahamas' },
      { value: 'BH', name: 'Bahrain' },
      { value: 'BD', name: 'Bangladesh' },
      { value: 'BB', name: 'Barbados' },
      { value: 'BY', name: 'Belarus' },
      { value: 'BE', name: 'Belgium' },
      { value: 'BZ', name: 'Belize' },
      { value: 'BJ', name: 'Benin' },
      { value: 'BM', name: 'Bermuda' },
      { value: 'BT', name: 'Bhutan' },
      { value: 'BO', name: 'Bolivia, Plurinational State of' },
      { value: 'BQ', name: 'Bonaire, Sint Eustatius and Saba' },
      { value: 'BA', name: 'Bosnia and Herzegovina' },
      { value: 'BW', name: 'Botswana' },
      { value: 'BV', name: 'Bouvet Island' },
      { value: 'BR', name: 'Brazil' },
      { value: 'IO', name: 'British Indian Ocean Territory' },
      { value: 'BN', name: 'Brunei Darussalam' },
      { value: 'BG', name: 'Bulgaria' },
      { value: 'BF', name: 'Burkina Faso' },
      { value: 'BI', name: 'Burundi' },
      { value: 'KH', name: 'Cambodia' },
      { value: 'CM', name: 'Cameroon' },
      { value: 'CA', name: 'Canada' },
      { value: 'CV', name: 'Cape Verde' },
      { value: 'KY', name: 'Cayman Islands' },
      { value: 'CF', name: 'Central African Republic' },
      { value: 'TD', name: 'Chad' },
      { value: 'CL', name: 'Chile' },
      { value: 'CN', name: 'China' },
      { value: 'CX', name: 'Christmas Island' },
      { value: 'CC', name: 'Cocos (Keeling) Islands' },
      { value: 'CO', name: 'Colombia' },
      { value: 'KM', name: 'Comoros' },
      { value: 'CG', name: 'Congo' },
      { value: 'CD', name: 'Congo, the Democratic Republic of the' },
      { value: 'CK', name: 'Cook Islands' },
      { value: 'CR', name: 'Costa Rica' },
      { value: 'CI', name: "Côte d'Ivoire" },
      { value: 'HR', name: 'Croatia' },
      { value: 'CU', name: 'Cuba' },
      { value: 'CW', name: 'Curaçao' },
      { value: 'CY', name: 'Cyprus' },
      { value: 'CZ', name: 'Czech Republic' },
      { value: 'DK', name: 'Denmark' },
      { value: 'DJ', name: 'Djibouti' },
      { value: 'DM', name: 'Dominica' },
      { value: 'DO', name: 'Dominican Republic' },
      { value: 'EC', name: 'Ecuador' },
      { value: 'EG', name: 'Egypt' },
      { value: 'SV', name: 'El Salvador' },
      { value: 'GQ', name: 'Equatorial Guinea' },
      { value: 'ER', name: 'Eritrea' },
      { value: 'EE', name: 'Estonia' },
      { value: 'ET', name: 'Ethiopia' },
      { value: 'FK', name: 'Falkland Islands (Malvinas)' },
      { value: 'FO', name: 'Faroe Islands' },
      { value: 'FJ', name: 'Fiji' },
      { value: 'FI', name: 'Finland' },
      { value: 'FR', name: 'France' },
      { value: 'GF', name: 'French Guiana' },
      { value: 'PF', name: 'French Polynesia' },
      { value: 'TF', name: 'French Southern Territories' },
      { value: 'GA', name: 'Gabon' },
      { value: 'GM', name: 'Gambia' },
      { value: 'GE', name: 'Georgia' },
      { value: 'DE', name: 'Germany' },
      { value: 'GH', name: 'Ghana' },
      { value: 'GI', name: 'Gibraltar' },
      { value: 'GR', name: 'Greece' },
      { value: 'GL', name: 'Greenland' },
      { value: 'GD', name: 'Grenada' },
      { value: 'GP', name: 'Guadeloupe' },
      { value: 'GU', name: 'Guam' },
      { value: 'GT', name: 'Guatemala' },
      { value: 'GG', name: 'Guernsey' },
      { value: 'GN', name: 'Guinea' },
      { value: 'GW', name: 'Guinea-Bissau' },
      { value: 'GY', name: 'Guyana' },
      { value: 'HT', name: 'Haiti' },
      { value: 'HM', name: 'Heard Island and McDonald Islands' },
      { value: 'VA', name: 'Holy See (Vatican City State)' },
      { value: 'HN', name: 'Honduras' },
      { value: 'HK', name: 'Hong Kong' },
      { value: 'HU', name: 'Hungary' },
      { value: 'IS', name: 'Iceland' },
      { value: 'IN', name: 'India' },
      { value: 'ID', name: 'Indonesia' },
      { value: 'IR', name: 'Iran, Islamic Republic of' },
      { value: 'IQ', name: 'Iraq' },
      { value: 'IE', name: 'Ireland' },
      { value: 'IM', name: 'Isle of Man' },
      { value: 'IL', name: 'Israel' },
      { value: 'IT', name: 'Italy' },
      { value: 'JM', name: 'Jamaica' },
      { value: 'JP', name: 'Japan' },
      { value: 'JE', name: 'Jersey' },
      { value: 'JO', name: 'Jordan' },
      { value: 'KZ', name: 'Kazakhstan' },
      { value: 'KE', name: 'Kenya' },
      { value: 'KI', name: 'Kiribati' },
      { value: 'KP', name: "Korea, Democratic People's Republic of" },
      { value: 'KR', name: 'Korea, Republic of' },
      { value: 'KW', name: 'Kuwait' },
      { value: 'KG', name: 'Kyrgyzstan' },
      { value: 'LA', name: "Lao People's Democratic Republic" },
      { value: 'LV', name: 'Latvia' },
      { value: 'LB', name: 'Lebanon' },
      { value: 'LS', name: 'Lesotho' },
      { value: 'LR', name: 'Liberia' },
      { value: 'LY', name: 'Libya' },
      { value: 'LI', name: 'Liechtenstein' },
      { value: 'LT', name: 'Lithuania' },
      { value: 'LU', name: 'Luxembourg' },
      { value: 'MO', name: 'Macao' },
      { value: 'MK', name: 'Macedonia, the former Yugoslav Republic of' },
      { value: 'MG', name: 'Madagascar' },
      { value: 'MW', name: 'Malawi' },
      { value: 'MY', name: 'Malaysia' },
      { value: 'MV', name: 'Maldives' },
      { value: 'ML', name: 'Mali' },
      { value: 'MT', name: 'Malta' },
      { value: 'MH', name: 'Marshall Islands' },
      { value: 'MQ', name: 'Martinique' },
      { value: 'MR', name: 'Mauritania' },
      { value: 'MU', name: 'Mauritius' },
      { value: 'YT', name: 'Mayotte' },
      { value: 'MX', name: 'Mexico' },
      { value: 'FM', name: 'Micronesia, Federated States of' },
      { value: 'MD', name: 'Moldova, Republic of' },
      { value: 'MC', name: 'Monaco' },
      { value: 'MN', name: 'Mongolia' },
      { value: 'ME', name: 'Montenegro' },
      { value: 'MS', name: 'Montserrat' },
      { value: 'MA', name: 'Morocco' },
      { value: 'MZ', name: 'Mozambique' },
      { value: 'MM', name: 'Myanmar' },
      { value: 'NA', name: 'Namibia' },
      { value: 'NR', name: 'Nauru' },
      { value: 'NP', name: 'Nepal' },
      { value: 'NL', name: 'Netherlands' },
      { value: 'NC', name: 'New Caledonia' },
      { value: 'NZ', name: 'New Zealand' },
      { value: 'NI', name: 'Nicaragua' },
      { value: 'NE', name: 'Niger' },
      { value: 'NG', name: 'Nigeria' },
      { value: 'NU', name: 'Niue' },
      { value: 'NF', name: 'Norfolk Island' },
      { value: 'MP', name: 'Northern Mariana Islands' },
      { value: 'NO', name: 'Norway' },
      { value: 'OM', name: 'Oman' },
      { value: 'PK', name: 'Pakistan' },
      { value: 'PW', name: 'Palau' },
      { value: 'PS', name: 'Palestinian Territory, Occupied' },
      { value: 'PA', name: 'Panama' },
      { value: 'PG', name: 'Papua New Guinea' },
      { value: 'PY', name: 'Paraguay' },
      { value: 'PE', name: 'Peru' },
      { value: 'PH', name: 'Philippines' },
      { value: 'PN', name: 'Pitcairn' },
      { value: 'PL', name: 'Poland' },
      { value: 'PT', name: 'Portugal' },
      { value: 'PR', name: 'Puerto Rico' },
      { value: 'QA', name: 'Qatar' },
      { value: 'RE', name: 'Réunion' },
      { value: 'RO', name: 'Romania' },
      { value: 'RU', name: 'Russian Federation' },
      { value: 'RW', name: 'Rwanda' },
      { value: 'BL', name: 'Saint Barthélemy' },
      { value: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' },
      { value: 'KN', name: 'Saint Kitts and Nevis' },
      { value: 'LC', name: 'Saint Lucia' },
      { value: 'MF', name: 'Saint Martin (French part)' },
      { value: 'PM', name: 'Saint Pierre and Miquelon' },
      { value: 'VC', name: 'Saint Vincent and the Grenadines' },
      { value: 'WS', name: 'Samoa' },
      { value: 'SM', name: 'San Marino' },
      { value: 'ST', name: 'Sao Tome and Principe' },
      { value: 'SA', name: 'Saudi Arabia' },
      { value: 'SN', name: 'Senegal' },
      { value: 'RS', name: 'Serbia' },
      { value: 'SC', name: 'Seychelles' },
      { value: 'SL', name: 'Sierra Leone' },
      { value: 'SG', name: 'Singapore' },
      { value: 'SX', name: 'Sint Maarten (Dutch part)' },
      { value: 'SK', name: 'Slovakia' },
      { value: 'SI', name: 'Slovenia' },
      { value: 'SB', name: 'Solomon Islands' },
      { value: 'SO', name: 'Somalia' },
      { value: 'ZA', name: 'South Africa' },
      { value: 'GS', name: 'South Georgia and the South Sandwich Islands' },
      { value: 'SS', name: 'South Sudan' },
      { value: 'ES', name: 'Spain' },
      { value: 'LK', name: 'Sri Lanka' },
      { value: 'SD', name: 'Sudan' },
      { value: 'SR', name: 'Suriname' },
      { value: 'SJ', name: 'Svalbard and Jan Mayen' },
      { value: 'SZ', name: 'Swaziland' },
      { value: 'SE', name: 'Sweden' },
      { value: 'CH', name: 'Switzerland' },
      { value: 'SY', name: 'Syrian Arab Republic' },
      { value: 'TW', name: 'Taiwan, Province of China' },
      { value: 'TJ', name: 'Tajikistan' },
      { value: 'TZ', name: 'Tanzania, United Republic of' },
      { value: 'TH', name: 'Thailand' },
      { value: 'TL', name: 'Timor-Leste' },
      { value: 'TG', name: 'Togo' },
      { value: 'TK', name: 'Tokelau' },
      { value: 'TO', name: 'Tonga' },
      { value: 'TT', name: 'Trinidad and Tobago' },
      { value: 'TN', name: 'Tunisia' },
      { value: 'TR', name: 'Turkey' },
      { value: 'TM', name: 'Turkmenistan' },
      { value: 'TC', name: 'Turks and Caicos Islands' },
      { value: 'TV', name: 'Tuvalu' },
      { value: 'UG', name: 'Uganda' },
      { value: 'UA', name: 'Ukraine' },
      { value: 'AE', name: 'United Arab Emirates' },
      { value: 'GB', name: 'United Kingdom' },
      { value: 'US', name: 'United States' },
      { value: 'UM', name: 'United States Minor Outlying Islands' },
      { value: 'UY', name: 'Uruguay' },
      { value: 'UZ', name: 'Uzbekistan' },
      { value: 'VU', name: 'Vanuatu' },
      { value: 'VE', name: 'Venezuela, Bolivarian Republic of' },
      { value: 'VN', name: 'Viet Nam' },
      { value: 'VG', name: 'Virgin Islands, British' },
      { value: 'VI', name: 'Virgin Islands, U.S.' },
      { value: 'WF', name: 'Wallis and Futuna' },
      { value: 'EH', name: 'Western Sahara' },
      { value: 'YE', name: 'Yemen' },
      { value: 'ZM', name: 'Zambia' },
      { value: 'ZW', name: 'Zimbabwe' },
    ];

    const template = html`
      <axa-dropdown
        data-test-id="dropdown-many"
        label="Country"
        required
        defaulttitle="Select country..."
        maxheight
        .items="${items}"
      ></axa-dropdown>
    `;
    render(template, wrapper);
    return wrapper;
  });
