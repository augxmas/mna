import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { listings, closedDeals, Listing, ListingType } from './data';
import './styles.css';

const Icon = ({ children, size = 20 }: { children: React.ReactNode; size?: number }) => <span className="icon" style={{ width: size, height: size }}>{children}</span>;

function App() {
  const [type, setType] = useState<'전체' | ListingType>('전체');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Listing | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [toast, setToast] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);

  const filtered = useMemo(() => listings.filter(item => {
    const matchType = type === '전체' || item.type === type;
    const q = query.trim().toLowerCase();
    return matchType && (!q || `${item.title} ${item.location} ${item.district} ${item.tags.join(' ')}`.toLowerCase().includes(q));
  }), [type, query]);

  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2500); };
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMobileMenu(false); };

  return <div className="app">
    <header className="nav-wrap">
      <nav className="nav container">
        <button className="brand" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><span className="brand-mark">S</span><span>SIAM DEAL<small>THAILAND M&A</small></span></button>
        <div className={`nav-links ${mobileMenu ? 'open' : ''}`}>
          <button onClick={() => scrollTo('listings')}>매물 찾기</button>
          <button onClick={() => scrollTo('process')}>거래 안내</button>
          <button onClick={() => scrollTo('closed')}>성사 사례</button>
          <button onClick={() => notify('로그인 기능은 다음 단계에서 연결됩니다.')}>로그인</button>
          <button className="primary small" onClick={() => notify('매물 등록 상담이 접수되었습니다.')}>매물 등록</button>
        </div>
        <button className="menu" aria-label="메뉴" onClick={() => setMobileMenu(v => !v)}>☰</button>
      </nav>
    </header>

    <main>
      <section className="hero">
        <div className="hero-grain" />
        <div className="container hero-inner">
          <div className="eyebrow light">VERIFIED OPPORTUNITIES IN THAILAND</div>
          <h1>태국에서 발견하는<br/><em>다음 기회.</em></h1>
          <p>현지 전문가가 직접 검토한 부동산과 기업 매물.<br/>탐색부터 계약까지, 신뢰할 수 있는 거래를 시작하세요.</p>
          <div className="hero-search">
            <div className="search-icon">⌕</div>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="지역, 매물명, 키워드로 검색" onKeyDown={e => e.key === 'Enter' && scrollTo('listings')} />
            <button onClick={() => scrollTo('listings')}>매물 검색</button>
          </div>
          <div className="hero-stats">
            <div><strong>214</strong><span>검증 완료 매물</span></div>
            <div><strong>฿3.8B</strong><span>누적 거래 금액</span></div>
            <div><strong>96%</strong><span>고객 만족도</span></div>
          </div>
        </div>
        <div className="bangkok-line">BANGKOK · PATTAYA · PHUKET · CHIANG MAI</div>
      </section>

      <section id="listings" className="section listings-section container">
        <div className="section-head">
          <div><div className="eyebrow">CURATED LISTINGS</div><h2>새롭게 등록된 매물</h2><p>담당 중개인이 권리 관계와 핵심 정보를 확인한 매물입니다.</p></div>
          <button className="text-link" onClick={() => {setType('전체'); setQuery('');}}>전체 보기 <span>→</span></button>
        </div>
        <div className="toolbar">
          <div className="tabs">{(['전체','부동산','법인'] as const).map(t => <button className={type === t ? 'active' : ''} key={t} onClick={() => setType(t)}>{t}</button>)}</div>
          <div className="result-count"><span className="dot" /> {filtered.length}개 매물</div>
        </div>
        {filtered.length ? <div className="listing-grid">{filtered.map(item => <article className="listing-card" key={item.id} onClick={() => setSelected(item)}>
          <div className="card-image">
            <img src={item.image} alt={item.title}/><span className={`type-badge ${item.type === '법인' ? 'company' : ''}`}>{item.type}</span>
            <button className={`heart ${favorites.includes(item.id) ? 'saved' : ''}`} aria-label="관심 매물" onClick={e => {e.stopPropagation(); setFavorites(f => f.includes(item.id) ? f.filter(id => id !== item.id) : [...f, item.id]);}}>♡</button>
          </div>
          <div className="card-body">
            <div className="location">⌖ {item.location}</div><h3>{item.title}</h3>
            <div className="card-meta"><strong>{item.priceLabel}</strong><span>{item.metric}</span></div>
            <div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="verified"><span>✓</span> SIAM DEAL 검증 완료</div>
          </div>
        </article>)}</div> : <div className="empty"><strong>검색 결과가 없습니다.</strong><span>다른 지역이나 키워드로 검색해 보세요.</span></div>}
      </section>

      <section id="process" className="process-section">
        <div className="container process-grid">
          <div><div className="eyebrow light">HOW IT WORKS</div><h2>좋은 거래는<br/><em>검증</em>에서 시작됩니다.</h2><p>매도인이 등록한 정보는 바로 공개되지 않습니다. 현지 전문 중개인이 서류와 현장을 확인하고, 거래 가능성이 검증된 매물만 공개합니다.</p><button className="outline-light" onClick={() => notify('거래 가이드 다운로드를 준비 중입니다.')}>거래 가이드 보기 →</button></div>
          <div className="steps">
            {[['01','매물 등록','소유자 또는 담당자가 기본 정보와 서류를 제출합니다.'],['02','전문가 검토','전담 중개인이 권리, 재무, 운영 정보를 확인합니다.'],['03','검증 매물 공개','검토를 통과한 매물만 회원에게 안전하게 공개됩니다.'],['04','문의 및 거래','전담 매니저가 미팅, 실사, 계약 전 과정을 지원합니다.']].map((s,i) => <div className="step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div>{i < 3 && <i/>}</div>)}
          </div>
        </div>
      </section>

      <section id="closed" className="section container">
        <div className="section-head"><div><div className="eyebrow">DEALS WE'VE CLOSED</div><h2>성사된 거래가 말해주는 신뢰</h2><p>실제 거래를 마친 고객의 경험을 확인하세요.</p></div><div className="pattaya-label">PATTAYA · HOTEL</div></div>
        <div className="deals-grid">{closedDeals.map(deal => <article className="deal-card" key={deal.id}>
          <div className="deal-photo"><img src={deal.image} alt={deal.nameKo}/><div className="sold-stamp">DEAL<br/><b>CLOSED</b></div><div className="deal-overlay"><span>{deal.date}</span><strong>{deal.name}</strong><small>{deal.rooms} · {deal.price}</small></div></div>
          <div className="review"><div className="stars">★★★★★</div><blockquote>“{deal.quote}”</blockquote><span>{deal.author}</span></div>
        </article>)}</div>
        <div className="trust-row"><span>모든 성사 사례는 당사자 동의하에 거래 정보를 일부 공개합니다.</span><button onClick={() => notify('후기 작성은 거래 완료 회원에게만 제공됩니다.')}>거래 후기 작성하기 →</button></div>
      </section>

      <section className="cta-section"><div className="container cta"><div><span>당신의 다음 기회를 찾고 계신가요?</span><h2>태국 현지 전문가와<br/>이야기를 시작하세요.</h2></div><button onClick={() => notify('상담 요청이 접수되었습니다. 담당자가 연락드릴 예정입니다.')}>무료 상담 신청 <span>↗</span></button></div></section>
    </main>

    <footer><div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">S</span><span>SIAM DEAL<small>THAILAND M&A</small></span></div><p>태국의 가치 있는 자산과 사람을 연결합니다.</p></div><div><strong>서비스</strong><a href="#listings">부동산 매물</a><a href="#listings">법인 매물</a><a href="#closed">성사 사례</a></div><div><strong>회사</strong><a href="#process">거래 절차</a><a href="#">회사 소개</a><a href="#">공지사항</a></div><div><strong>Contact</strong><span>Bangkok, Thailand</span><span>hello@siamdeal.co.th</span><span>+66 2 123 4567</span></div></div><div className="container footer-bottom"><span>© 2026 SIAM DEAL. Demo concept.</span><span>개인정보처리방침 · 이용약관</span></div></footer>

    {selected && <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && setSelected(null)}><div className="modal">
      <button className="modal-close" onClick={() => setSelected(null)}>×</button>
      <div className="modal-image"><img src={selected.image} alt={selected.title}/><span className={`type-badge ${selected.type === '법인' ? 'company' : ''}`}>{selected.type}</span></div>
      <div className="modal-content"><div className="location">⌖ {selected.location}</div><h2>{selected.title}</h2><div className="modal-price"><strong>{selected.priceLabel}</strong><span>{selected.metric}</span></div><p>{selected.description}</p><div className="tags">{selected.tags.map(t => <span key={t}>{t}</span>)}</div><div className="map-wrap"><iframe title={`${selected.title} 위치`} src={`https://maps.google.com/maps?q=${selected.lat},${selected.lng}&z=14&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div><div className="map-caption"><span>정확한 주소는 상담 후 공개됩니다.</span><a href={`https://www.google.com/maps?q=${selected.lat},${selected.lng}`} target="_blank" rel="noreferrer">Google 지도에서 보기 ↗</a></div><button className="primary inquiry" onClick={() => { setSelected(null); notify(`${selected.title} 문의가 접수되었습니다.`); }}>이 매물 문의하기</button></div>
    </div></div>}
    {toast && <div className="toast"><b>✓</b>{toast}</div>}
  </div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
