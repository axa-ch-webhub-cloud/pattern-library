import html from "nanohtml";
import classnames from "classnames";

export default function({ title, items, short }) {
  return html`
    <aside class="m-footer-languages__box">
      ${title &&
        html`
          <strong class="m-footer-languages__title">${title}</strong>
        `}

      <ul class="m-footer-languages__list">
        ${Array.isArray(items) &&
          items.map(
            ({ name, code = "en", url = "", isActive }) => html`
              <li class="m-footer-languages__list-item">
                <a
                  class="${classnames(
                    "m-footer-languages__link",
                    "js-footer-languages__link",
                    {
                      "is-footer-languages-active": isActive
                    }
                  )}"
                  href="${url}"
                  lang="${code}"
                  >${short ? code : name}</a
                >
              </li>
            `
          )}
      </ul>
    </aside>
  `;
}
