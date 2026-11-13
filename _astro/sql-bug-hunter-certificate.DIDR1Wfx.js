import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c,u as l}from"./certificate-canvas.wWKmeGMG.js";function u({lang:e}){return e===`ru`?{eyebrow:`SQL с нуля до результата`,title:`СЕРТИФИКАТ ИГРОВОГО ДОСТИЖЕНИЯ`,presentedTo:`награждается`,bodyLines:[`за успешное завершение игры SQL Bug Hunter`,`по материалам книги и курса «SQL Введение».`],casesLabel:`Дел раскрыто:`,xpLabel:`Опыт:`,dateLabel:`Дата завершения:`,certificateIdLabel:`ID сертификата`,authorLine:`Автор проекта: Сергей Романенко · sql.sergeyromanenko.com · Результаты не проходят независимую проверку`}:{eyebrow:`SQL FROM ZERO TO HERO`,title:`GAME ACHIEVEMENT CERTIFICATE`,presentedTo:`awarded to`,bodyLines:[`for successfully completing the SQL Bug Hunter game`,`based on the "SQL Введение" book and course.`],casesLabel:`Cases solved:`,xpLabel:`Experience:`,dateLabel:`Completion date:`,certificateIdLabel:`Certificate ID`,authorLine:`Author: Sergey Romanenko · sql.sergeyromanenko.com · Results are not independently verified`}}function d(e,t){return new Intl.DateTimeFormat(t===`ru`?`ru-RU`:`en-GB`,{day:`numeric`,month:`long`,year:`numeric`}).format(e)}function f({lang:e}){return`sql-bug-hunter-certificate-${e}.png`}function p(e){return`BH-${e?e():typeof crypto<`u`&&typeof crypto.randomUUID==`function`?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint8Array(16)),e=>e.toString(16).padStart(2,`0`)).join(``)}`}var{paper:m,surface:h,ink:g,muted:_,label:v,line:y,rule:b,accent:x}=o,S=c;async function C(r){let o=await t(),c=u({lang:r.lang}),f=(r.lang===`en`&&r.latinName?.trim()?r.latinName:r.name).trim(),{size:p,textLength:C}=s(f),w=a(f),T=C===null?``:` textLength="${C}" lengthAdjust="spacingAndGlyphs"`,E=d(r.completedDate,r.lang),D=`${c.certificateIdLabel}: ${a(r.certificateId)}`,O=`
  <rect width="${n}" height="${i}" fill="${m}"/>
  <rect x="90" y="90" width="${n-180}" height="${i-180}" fill="none" stroke="${b}" stroke-width="4"/>
  <rect x="130" y="130" width="${n-260}" height="${i-260}" fill="${h}" stroke="${y}" stroke-width="2"/>
  <text class="mono" x="${S}" y="370" text-anchor="middle" font-size="50" letter-spacing="22" fill="${v}">${a(c.eyebrow)}</text>
  <text class="serif" x="${S}" y="570" text-anchor="middle" font-size="140" fill="${g}">${a(c.title)}</text>
  <rect x="${S-110}" y="640" width="220" height="6" fill="${x}"/>`,k=`
  <text class="serif-i" x="${S}" y="790" text-anchor="middle" font-size="60" fill="${_}">${a(c.presentedTo)}</text>
  <text class="serif-i" x="${S}" y="1090" text-anchor="middle" font-size="${p}" fill="${g}"${T}>${w}</text>
  <line x1="${S-1300}" y1="1170" x2="${S+1300}" y2="1170" stroke="${y}" stroke-width="3"/>`,A=l(c.bodyLines.join(` `),2500,58),j=e(A,1330,86,58,_),M=[{label:c.casesLabel,value:r.lang===`ru`?`${r.casesCompleted} из ${r.totalCases}`:`${r.casesCompleted} of ${r.totalCases}`},{label:c.xpLabel,value:String(r.xp)}],N=M.map((e,t)=>`  <text class="mono" x="${S-600}" y="${1535+t*86}" font-size="42" letter-spacing="4" fill="${v}">${a(e.label)}</text>
  <text class="mono" x="${S+600}" y="${1535+t*86}" text-anchor="end" font-size="42" letter-spacing="4" fill="${v}">${a(e.value)}</text>`).join(`
`),P=1535+M.length*86+150,F=`
  <text class="mono" x="${S}" y="${P}" text-anchor="middle" font-size="42" letter-spacing="4" fill="${v}">${a(c.dateLabel)} ${a(E)}</text>
  <text class="mono" x="${S}" y="${P+80}" text-anchor="middle" font-size="42" letter-spacing="4" fill="${v}">${D}</text>
  <line x1="600" y1="${P+150}" x2="${n-600}" y2="${P+150}" stroke="${y}" stroke-width="2"/>
  <text class="serif-i" x="${S}" y="${P+200}" text-anchor="middle" font-size="30" fill="${_}">${a(c.authorLine)}</text>`;return`<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}">
  <defs>
    <style>${o}
      .serif { font-family: 'PT Serif', Georgia, 'Times New Roman', serif; }
      .serif-i { font-family: 'PT Serif', Georgia, 'Times New Roman', serif; font-style: italic; }
      .mono { font-family: 'IBM Plex Mono', 'Courier New', monospace; }
    </style>
  </defs>
  ${O}${k}${j}${N}${F}
</svg>`}async function w(e){let t=await C(e),n=await r(t,m),i=URL.createObjectURL(n);try{let t=document.createElement(`a`);t.href=i,t.download=f({lang:e.lang}),document.body.appendChild(t),t.click(),t.remove()}finally{window.setTimeout(()=>URL.revokeObjectURL(i),1e4)}return n}export{w as n,p as r,C as t};