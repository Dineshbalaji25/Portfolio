import React, { useState, useMemo } from 'react';
import { simulatorProducts } from '../data/portfolioData';
import { 
  BarChart3, 
  Filter, 
  ArrowUpDown, 
  Download, 
  Info, 
  ChevronRight, 
  X, 
  Layers, 
  TrendingUp, 
  AlertTriangle, 
  Sparkles,
  Search
} from 'lucide-react';

export default function AnalyticsDashboardSimulator() {
  const [selectedTier, setSelectedTier] = useState('All');
  const [sortBy, setSortBy] = useState('score'); // 'score', 'roas', 'spend'
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const tiersList = ['All', 'Scale', 'High Potential', 'Test', 'Organic Winner', 'Stop'];

  // Filter & Sort
  const filteredProducts = useMemo(() => {
    return simulatorProducts
      .filter((p) => {
        const matchesTier = selectedTier === 'All' || p.tier === selectedTier;
        const matchesSearch = 
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTier && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'score') return b.compositeScore - a.compositeScore;
        if (sortBy === 'roas') return b.trueRoas - a.trueRoas;
        if (sortBy === 'spend') {
          const numA = parseInt(a.adSpend.replace(/[^0-9]/g, ''), 10);
          const numB = parseInt(b.adSpend.replace(/[^0-9]/g, ''), 10);
          return numB - numA;
        }
        return 0;
      });
  }, [selectedTier, sortBy, searchQuery]);

  // Export JSON handler
  const handleExportData = () => {
    const dataStr = JSON.stringify(filteredProducts, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `thotfy-analytic-blueprint-${selectedTier.toLowerCase()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getTierBadgeClass = (tier) => {
    switch (tier) {
      case 'Scale': return 'badge-emerald';
      case 'High Potential': return 'badge-indigo';
      case 'Test': return 'badge-amber';
      case 'Organic Winner': return 'badge-cyan';
      case 'Stop': return 'badge-rose';
      default: return 'badge-subtle';
    }
  };

  return (
    <section id="simulator" className="section simulator-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Interactive Component</span>
          <h2 className="section-title">THOTFY-Analytic // Live Blueprint Simulator</h2>
          <p className="section-subtitle">
            Experience the 5-tier product performance engine created to synthesize ad spend, cross-channel attribution, and PostgreSQL ground-truth orders into automated marketing decisions.
          </p>
        </div>

        {/* Top KPI Metric Cards */}
        <div className="simulator-kpi-grid">
          <div className="kpi-card">
            <span className="kpi-title">Tracked Ad Spend</span>
            <span className="kpi-value">₹1,09,900</span>
            <span className="kpi-trend positive">Meta + Pinterest Campaigns</span>
          </div>

          <div className="kpi-card">
            <span className="kpi-title">Blended True ROAS</span>
            <span className="kpi-value">3.24x</span>
            <span className="kpi-trend neutral">vs 3.55x reported by Meta</span>
          </div>

          <div className="kpi-card">
            <span className="kpi-title">Total POAS (Profit On Ads)</span>
            <span className="kpi-value">₹1,86,900</span>
            <span className="kpi-trend positive">+1.70x Margin Contribution</span>
          </div>

          <div className="kpi-card">
            <span className="kpi-title">Signal Reconciled</span>
            <span className="kpi-value">100%</span>
            <span className="kpi-trend positive">0% Duplicate Purchases</span>
          </div>
        </div>

        {/* Simulator Control Bar */}
        <div className="simulator-controls-card">
          <div className="tier-tabs-wrapper">
            <span className="filter-label">
              <Filter size={15} />
              <span>Classification Tier:</span>
            </span>
            <div className="tier-tabs">
              {tiersList.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`tier-tab-btn ${selectedTier === tier ? 'active' : ''}`}
                >
                  <span>{tier}</span>
                  <span className="tier-count">
                    {tier === 'All' 
                      ? simulatorProducts.length 
                      : simulatorProducts.filter(p => p.tier === tier).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="controls-right">
            {/* Search Input */}
            <div className="search-input-wrapper">
              <Search size={15} className="search-icon" />
              <input
                type="text"
                placeholder="Search SKU or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="sort-dropdown-wrapper">
              <ArrowUpDown size={15} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
                aria-label="Sort table"
              >
                <option value="score">Sort: Composite Score</option>
                <option value="roas">Sort: True ROAS</option>
                <option value="spend">Sort: Ad Spend</option>
              </select>
            </div>

            {/* Export JSON Button */}
            <button 
              onClick={handleExportData}
              className="btn btn-secondary btn-sm export-btn"
              title="Export Current Filter as JSON"
            >
              <Download size={14} />
              <span>Export JSON</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="table-wrapper card">
          <table className="simulator-table">
            <thead>
              <tr>
                <th>Product &amp; SKU</th>
                <th>Classification</th>
                <th>Ad Spend</th>
                <th>True ROAS</th>
                <th>POAS</th>
                <th>Score</th>
                <th>Automated Strategy</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => (
                <tr key={p.id} className="table-row">
                  <td className="product-col">
                    <div className="product-name">{p.name}</div>
                    <div className="product-meta">
                      <span className="sku-tag">{p.id}</span>
                      <span className="category-tag">{p.category}</span>
                    </div>
                  </td>

                  <td>
                    <span className={`badge ${getTierBadgeClass(p.tier)}`}>
                      {p.tier}
                    </span>
                  </td>

                  <td className="mono-val">{p.adSpend}</td>

                  <td>
                    <div className="roas-cell">
                      <span className="true-roas-num">{p.trueRoas}x</span>
                      <span className="roas-sub">Meta: {p.metaRoas}x | GA4: {p.ga4Roas}x</span>
                    </div>
                  </td>

                  <td className="mono-val">{p.poas}</td>

                  <td>
                    <div className="score-cell">
                      <div className="score-num">{p.compositeScore}</div>
                      <div className="score-bar-bg">
                        <div 
                          className="score-bar-fill" 
                          style={{ width: `${Math.min(p.compositeScore, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  <td className="action-col">
                    <span className="action-text">{p.action}</span>
                  </td>

                  <td>
                    <button
                      onClick={() => setActiveModalProduct(p)}
                      className="btn btn-secondary btn-sm inspect-btn"
                      title="Inspect Conversion Funnel"
                    >
                      <span>Funnel</span>
                      <ChevronRight size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProducts.length === 0 && (
            <div className="empty-table-state">
              <p>No products match the selected tier or search term.</p>
            </div>
          )}
        </div>

        {/* Per-Product Funnel Drilldown Modal */}
        {activeModalProduct && (
          <div className="modal-backdrop" onClick={() => setActiveModalProduct(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <span className={`badge ${getTierBadgeClass(activeModalProduct.tier)}`}>
                    {activeModalProduct.tier} Tier
                  </span>
                  <h3 className="modal-title">{activeModalProduct.name}</h3>
                  <span className="modal-sku">SKU: {activeModalProduct.id} • {activeModalProduct.category}</span>
                </div>
                <button 
                  onClick={() => setActiveModalProduct(null)} 
                  className="modal-close-btn"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                {/* Attribution Discrepancy Alert */}
                <div className="discrepancy-callout">
                  <div className="discrepancy-title">
                    <AlertTriangle size={16} />
                    <span>Cross-Channel Attribution Discrepancy</span>
                  </div>
                  <p className="discrepancy-desc">{activeModalProduct.discrepancyNote}</p>
                </div>

                {/* Funnel Stages */}
                <h4 className="funnel-heading">Behavioral Funnel Analysis (Ground-Truth DB)</h4>
                <div className="funnel-steps-list">
                  <div className="funnel-step-item">
                    <span className="step-label">Ad Impressions</span>
                    <span className="step-val">{activeModalProduct.funnel.impressions.toLocaleString()}</span>
                    <div className="funnel-bar" style={{ width: '100%' }}></div>
                  </div>

                  <div className="funnel-step-item">
                    <span className="step-label">Ad Clicks</span>
                    <span className="step-val">{activeModalProduct.funnel.clicks.toLocaleString()} ({activeModalProduct.ctr} CTR)</span>
                    <div className="funnel-bar" style={{ width: '70%' }}></div>
                  </div>

                  <div className="funnel-step-item">
                    <span className="step-label">Product Views</span>
                    <span className="step-val">{activeModalProduct.funnel.views.toLocaleString()}</span>
                    <div className="funnel-bar" style={{ width: '60%' }}></div>
                  </div>

                  <div className="funnel-step-item">
                    <span className="step-label">Add to Cart</span>
                    <span className="step-val">{activeModalProduct.funnel.carts.toLocaleString()}</span>
                    <div className="funnel-bar" style={{ width: '40%' }}></div>
                  </div>

                  <div className="funnel-step-item">
                    <span className="step-label">Checkout Initiated</span>
                    <span className="step-val">{activeModalProduct.funnel.checkouts.toLocaleString()}</span>
                    <div className="funnel-bar" style={{ width: '25%' }}></div>
                  </div>

                  <div className="funnel-step-item highlight-step">
                    <span className="step-label">Orders Placed</span>
                    <span className="step-val">{activeModalProduct.funnel.orders.toLocaleString()} units</span>
                    <div className="funnel-bar" style={{ width: '18%' }}></div>
                  </div>
                </div>

                {/* Strategy recommendation */}
                <div className="modal-strategy-box">
                  <div className="strategy-title">
                    <Sparkles size={16} />
                    <span>Algorithmic Recommendation</span>
                  </div>
                  <p className="strategy-text">{activeModalProduct.action}</p>
                </div>
              </div>

              <div className="modal-footer">
                <button 
                  onClick={() => setActiveModalProduct(null)} 
                  className="btn btn-secondary btn-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
