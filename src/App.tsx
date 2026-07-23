import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import regeneratedImage03474 from './assets/images/regenerated_image_1783932903474.jpg';
import regeneratedImage04075 from './assets/images/regenerated_image_1783932904075.jpg';
import regeneratedImage04914 from './assets/images/regenerated_image_1783932904914.png';
import regeneratedImage05622 from './assets/images/regenerated_image_1783932905622.png';
import regeneratedImage06410 from './assets/images/regenerated_image_1783932906410.png';
import { 
  Play, 
  Flame, 
  Award, 
  ExternalLink, 
  Phone, 
  MapPin, 
  User, 
  Copy, 
  Check, 
  Users, 
  MessageSquare, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  ThumbsUp, 
  ChevronRight, 
  Tv, 
  Video, 
  Clock,
  Menu,
  X,
  Camera,
  Eye,
  Layers
} from 'lucide-react';

// Interfaces
interface WorkItem {
  id: string;
  title: string;
  category: 'commercial' | 'narrative' | 'viral';
  platform: 'Bilibili' | 'Douyin';
  url: string;
  description: string;
  tag: string;
  metric?: string;
  accentBg: string;
  accentText: string;
}

export default function App() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'commercial' | 'narrative' | 'viral'>('all');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Message Form State
  const [msgName, setMsgName] = useState('');
  const [msgContact, setMsgContact] = useState('');
  const [msgBrief, setMsgBrief] = useState('');
  const [msgSubmitted, setMsgSubmitted] = useState(false);

  // Copy to clipboard helper
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };
  // Contact submit helper
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgName.trim() || !msgContact.trim()) return;
    setMsgSubmitted(true);
    setTimeout(() => {
      setMsgSubmitted(false);
      setMsgName('');
      setMsgContact('');
      setMsgBrief('');
    }, 4000);
  };

  // All works database containing updated list with the new video item as requested
  const works: WorkItem[] = [
    // 品牌商单案例 (Commercials)
    {
      id: 'comm-1',
      title: 'TCL 电视沉浸式创意评测项目',
      category: 'commercial',
      platform: 'Bilibili',
      url: 'https://www.bilibili.com/video/BV1SMEtzxEjN/',
      description: '融合视觉美学与技术拆解，将超高清画质与硬核电视参数做精细化场景落地，兼具商业转化与艺术质感。',
      tag: '高端商单',
      accentBg: 'bg-red-50 border-red-200/60 text-red-600 hover:border-red-400',
      accentText: 'text-red-600'
    },
    {
      id: 'comm-2',
      title: '清闲人机工学椅体验项目',
      category: 'commercial',
      platform: 'Bilibili',
      url: 'https://www.bilibili.com/video/BV1aVTTzGEEx/',
      description: '人体工学设计与现代职场场景叙事高度融合，用镜头深度还原“清闲”的舒适体验与设计美学。',
      tag: '智能家居',
      accentBg: 'bg-blue-50 border-blue-200/60 text-blue-600 hover:border-blue-400',
      accentText: 'text-blue-600'
    },
    {
      id: 'comm-3',
      title: '抖音短视频种草爆款案例',
      category: 'commercial',
      platform: 'Douyin',
      url: 'https://v.douyin.com/i6HXduFH1Tc/',
      description: '适配快节奏、强逻辑、高吸引力留存周期的抖音垂直种草内容，实现超高点赞与商品转化。',
      tag: '抖音种草',
      accentBg: 'bg-pink-50 border-pink-200/60 text-pink-600 hover:border-pink-400',
      accentText: 'text-pink-600'
    },
    {
      id: 'comm-4',
      title: '美的洗碗机短视频商业项目',
      category: 'commercial',
      platform: 'Bilibili',
      url: 'https://www.bilibili.com/video/BV12hBMYME7W/',
      description: '将智能洗碗机的核心卖点无缝嵌入日常家庭痛点叙事，通过富有生活温度的情感镜头打动消费者。',
      tag: '场景商单',
      accentBg: 'bg-emerald-50 border-emerald-200/60 text-emerald-600 hover:border-emerald-400',
      accentText: 'text-emerald-600'
    },

    // 非遗人文与访谈叙事 (Humanism & Narrative)
    {
      id: 'narr-1',
      title: '采访叙事：联动多位达人深度访谈录',
      category: 'narrative',
      platform: 'Bilibili',
      url: 'https://www.bilibili.com/video/BV1V3LmzLEnX/',
      description: '联动多方视角和数码达人，采用高端写实布光和多机位采访剪辑，生动传达创作者的内核情感与时代思考。',
      tag: '深度访谈',
      accentBg: 'bg-amber-50 border-amber-200/60 text-amber-600 hover:border-amber-400',
      accentText: 'text-amber-600'
    },
    {
      id: 'narr-2',
      title: '非遗人文结合数码项目跨界案例',
      category: 'narrative',
      platform: 'Bilibili',
      url: 'https://www.bilibili.com/video/BV1TeiMBfEoF/',
      description: '深度探索中国传统非遗文化与现代前沿科技数码的破壁融合，赋予冰冷数码硬件以国潮温度与思想厚度。',
      tag: '国潮非遗',
      accentBg: 'bg-indigo-50 border-indigo-200/60 text-indigo-600 hover:border-indigo-400',
      accentText: 'text-indigo-600'
    },

    // 爆款成就与互动数据 (Viral Achievement) - **INCLUDING NEW VIDEO**
    {
      id: 'viral-new',
      title: 'B站小众产品挖掘与跟风热潮引领',
      category: 'viral',
      platform: 'Bilibili',
      url: 'https://www.bilibili.com/video/BV1Gx37zUEgj/?vd_source=679a4bb385b44f11f1b016dfb7241618',
      description: '挖掘小众产品，在B站较早发布，且引起跟风热潮，实现同类题材中播放与互动遥遥领先。',
      tag: '题材开创者',
      metric: '独家首发 / 引领风潮',
      accentBg: 'bg-violet-50 border-violet-200/60 text-violet-600 hover:border-violet-400',
      accentText: 'text-violet-600'
    },
    {
      id: 'viral-1',
      title: 'B站 300万+ 播放量里程碑作品',
      category: 'viral',
      platform: 'Bilibili',
      url: 'https://www.bilibili.com/video/BV1xf4y1s7p1/',
      description: '精准把控大众情绪和平台算法推送黄金时间，发布即大爆，快速斩获300万+全网瞩目播放量。',
      tag: '顶级爆款',
      metric: '3,000,000+ 播放',
      accentBg: 'bg-rose-50 border-rose-200/60 text-rose-600 hover:border-rose-400',
      accentText: 'text-rose-600'
    },
    {
      id: 'viral-2',
      title: '日常高播放内容：黄金开头钩子',
      category: 'viral',
      platform: 'Bilibili',
      url: 'https://www.bilibili.com/video/BV1uF411k7ki/',
      description: '通过打磨“前10秒黄金悬念”与高信息密度钩子设计，大幅度减少中途跳出，拉升核心完播率与转化率。',
      tag: '黄金留存',
      metric: '高完播率神作',
      accentBg: 'bg-cyan-50 border-cyan-200/60 text-cyan-600 hover:border-cyan-400',
      accentText: 'text-cyan-600'
    },
    {
      id: 'viral-3',
      title: '入选 B站全站综合排行榜第 56 名',
      category: 'viral',
      platform: 'Bilibili',
      url: 'https://www.bilibili.com/video/BV1oV411a7tE/',
      description: '出色的社会议题穿透力与剪辑质感，获得平台算法顶级权重扶持，直达全站综合排行榜前列。',
      tag: '排行榜荣誉',
      metric: '全站综合 Top 56',
      accentBg: 'bg-amber-50 border-amber-200/60 text-amber-600 hover:border-amber-400',
      accentText: 'text-amber-600'
    },
    {
      id: 'viral-4',
      title: '高互动幽默向数码吐槽内容',
      category: 'viral',
      platform: 'Bilibili',
      url: 'https://www.bilibili.com/video/BV14G411W7YJ/',
      description: '采用犀利、幽默而不失专业底色的吐槽脱口秀风格，精准命中大众购买雷点，激发弹幕评论狂热裂变。',
      tag: '强粘性吐槽',
      metric: '弹幕互动群',
      accentBg: 'bg-fuchsia-50 border-fuchsia-200/60 text-fuchsia-600 hover:border-fuchsia-400',
      accentText: 'text-fuchsia-600'
    }
  ];

  const categoriesList = [
    { id: 'commercial', title: '品牌商单案例', subtitle: '大厂深度信赖 · 场景化卖点爆破', color: 'from-blue-600 to-indigo-600' },
    { id: 'narrative', title: '非遗人文与深度访谈', subtitle: '有温度的跨界融合 · 深刻思想厚度', color: 'from-amber-600 to-amber-800' },
    { id: 'viral', title: '爆款成就与引领热潮', subtitle: '独家首发引爆风潮 · 平台算法推荐突破', color: 'from-rose-600 to-pink-600' }
  ];

  const displayedCategories = categoriesList.filter(
    cat => activeCategory === 'all' || activeCategory === cat.id
  );

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(w => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Background ambient glowing spheres */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/40 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-100/30 blur-[150px]"></div>
        <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-sky-100/30 blur-[100px]"></div>
      </div>

      {/* Glassmorphic Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px] shadow-md shadow-blue-500/10 overflow-hidden">
              <img src={regeneratedImage04075} alt="He Dong" className="w-full h-full object-cover rounded-[10px]" referrerPolicy="no-referrer" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors">何栋 (He Dong)</span>
              <p className="text-[10px] font-mono text-slate-500 tracking-widest uppercase font-semibold">Director & Producer</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#stats" className="hover:text-blue-600 transition-colors">核心数据</a>
            <a href="#brands" className="hover:text-blue-600 transition-colors">合作品牌</a>
            <a href="#accounts" className="hover:text-blue-600 transition-colors">账号矩阵</a>
            <a href="#works" className="hover:text-blue-600 transition-colors">作品集锦</a>
            <a href="#trust" className="hover:text-blue-600 transition-colors">粉丝信任</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">编导履历</a>
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleCopy('hedong2345', 'wechat')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-pointer"
            >
              {copiedText === 'wechat' ? '已复制微信' : '联系共创'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                <a 
                  href="#stats" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-700 hover:text-blue-600"
                >
                  核心数据
                </a>
                <a 
                  href="#brands" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-700 hover:text-blue-600"
                >
                  合作品牌
                </a>
                <a 
                  href="#accounts" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-700 hover:text-blue-600"
                >
                  账号矩阵
                </a>
                <a 
                  href="#works" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-700 hover:text-blue-600"
                >
                  作品集锦
                </a>
                <a 
                  href="#trust" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-700 hover:text-blue-600"
                >
                  粉丝信任
                </a>
                <a 
                  href="#experience" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-700 hover:text-blue-600"
                >
                  编导履历
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-700 hover:text-blue-600"
                >
                  即刻共创
                </a>
                <a 
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 text-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white text-sm"
                >
                  联系我
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                <Sparkles size={14} className="text-blue-600" />
                <span>5年视频全链路实战经验</span>
              </motion.div>

              <div className="space-y-3 sm:space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-none"
                >
                  何 栋 <span className="text-2xl sm:text-4xl font-normal text-slate-500 block sm:inline sm:ml-4">导演 · 编导 作品集</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg sm:text-xl text-slate-600 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  专注高品质商业短视频、硬核科技数码种草、人文深度访谈的精细化内容研发。以导演之眼雕琢光影，用严密编导思维引爆流量。
                </motion.p>
              </div>

              {/* Quick interactive stats for hero */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto lg:mx-0 text-left pt-2"
              >
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">1.5亿+</span>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase font-mono font-semibold">全网累计播放</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">300万+</span>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase font-mono font-semibold">单支最高播放</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Top 56</span>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase font-mono font-semibold">B站全站综合排</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">10+</span>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase font-mono font-semibold">百万级爆款案例</p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <button 
                  onClick={() => handleCopy('hedong2345', 'wechat')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center space-x-2 hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>{copiedText === 'wechat' ? '已复制微信ID' : '复制微信直接交谈'}</span>
                  <ChevronRight size={16} />
                </button>
              </motion.div>

              {/* Floating Contact Badges */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-600 font-mono"
              >
                <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
                  <User size={12} className="text-blue-600" />
                  <span>28岁</span>
                </span>
                <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
                  <MapPin size={12} className="text-indigo-600" />
                  <span>深圳</span>
                </span>
                <button 
                  onClick={() => handleCopy('13074099885', 'phone')}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 cursor-pointer transition-colors shadow-sm"
                >
                  <Phone size={12} className="text-emerald-600" />
                  <span>{copiedText === 'phone' ? '已复制手机号' : '13074099885'}</span>
                </button>
                <button 
                  onClick={() => handleCopy('hedong2345', 'wechat')}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 cursor-pointer transition-colors shadow-sm"
                >
                  <MessageSquare size={12} className="text-violet-600" />
                  <span>{copiedText === 'wechat' ? '已复制微信号' : 'WeChat: hedong2345'}</span>
                </button>
              </motion.div>
            </div>

            {/* Hero Artistic Media Card Mock */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-emerald-500/15 p-[1px] shadow-xl"
              >
                <div className="w-full h-full bg-white rounded-[23px] overflow-hidden p-6 flex flex-col justify-between relative group shadow-inner">
                  
                  {/* Absolute subtle grid overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
                  
                  {/* Visual Status Indicator */}
                  <div className="relative z-10 flex justify-between items-center">
                    <span className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-emerald-600 font-mono bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>Ready to Create</span>
                    </span>
                    <div className="text-[10px] font-mono text-slate-400">2026 UTC+8</div>
                  </div>

                  {/* Director Showcase Art */}
                  <div className="relative z-10 my-auto text-center space-y-4">
                    <div className="relative inline-block">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-indigo-400 p-1 animate-float shadow-lg shadow-blue-500/15 overflow-hidden">
                        <img src={regeneratedImage03474} alt="He Dong Avatar" className="w-full h-full object-cover rounded-full bg-slate-50" referrerPolicy="no-referrer" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1.5 rounded-full shadow-md">
                        <Award size={14} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-800 tracking-wider">何栋 (He Dong)</h3>
                      <p className="text-xs text-slate-500 font-mono font-semibold">B站百万播放级导演·编导</p>
                    </div>

                    <div className="flex justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className="w-1.5 h-1.5 rounded-full bg-blue-600/60"></div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Quote Carousel */}
                  <div className="relative z-10 p-4 rounded-2xl bg-slate-50 border border-slate-150 backdrop-blur-sm shadow-sm">
                    <p className="text-[11px] text-slate-600 italic leading-relaxed text-center font-medium">
                      "将硬核数码产品化身为人文视觉大片。每一支爆款的背后，都是对用户情绪和视觉节奏的极致调校。"
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Stats Details Section */}
      <section id="stats" className="py-20 bg-white border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase font-mono font-semibold">实战业绩 · 数据说话</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">打造顶级自媒体内容生态</p>
            <p className="text-slate-500 text-sm">深谙短视频分发机制与用户高留存心智，每一项成就皆是实实在在的硬核交付结果。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <Flame size={24} />
              </div>
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight block">1.5亿+</span>
              <span className="text-sm font-bold text-slate-700 block mt-2">全网累计总播放量</span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">主导、联合及独立编导策划的视频作品全网总分发流量过亿，极具大众传播裂变力。</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                <Users size={24} />
              </div>
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight block">300万+</span>
              <span className="text-sm font-bold text-slate-700 block mt-2">单支视频最高播放量</span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">独立主策划的超级单品视频一经发出即破圈爆发，快速积累大量死忠粉与平台热推。</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400/30 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 shadow-sm">
                <Award size={24} />
              </div>
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight block">Top 56</span>
              <span className="text-sm font-bold text-slate-700 block mt-2">B站全站排行榜最高席位</span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">打造的作品冲破圈层限制，与顶级大V同台竞争，多次登上全站热门综合排行榜高位。</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-400/30 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                <Tv size={24} />
              </div>
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight block">10+</span>
              <span className="text-sm font-bold text-slate-700 block mt-2">百万播放级硬核爆款</span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">非偶然性爆款，多品类（科技、办公、智能硬核、吐槽）均能维持高频百万级别播放交付。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Matrix Section */}
      <section id="brands" className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase font-mono font-semibold">Service Brand Matrix</h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">大厂信赖 · 品牌服务矩阵</p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              曾服务十余家一线硬件大厂与生活智造品牌，涵盖高预算商业广告、深度场景化评测及垂直种草投放。
            </p>
          </div>

          {/* Premium custom styled brand capsules */}
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
            {[
              { name: '美的 (Midea)', type: '智能家电龙头' },
              { name: 'TCL', type: '高端显示巨头' },
              { name: 'vivo', type: '主流手机厂商' },
              { name: '三星 (Samsung)', type: '国际数码品牌' },
              { name: '荣耀 (Honor)', type: '知名科技大厂' },
              { name: '影石 (Insta360)', type: '前沿智能相机' },
              { name: '徕芬', type: '国货个护极客' },
              { name: '容声', type: '老牌冰箱智造' },
              { name: '石头 (Roborock)', type: '智能清洁科技' },
              { name: '雷鸟', type: '先锋显示品牌' },
              { name: '西昊', type: '人体工学椅领军' },
              { name: '黑白调', type: '健康办公先行者' },
              { name: 'Viture Pro', type: 'XR前沿显示硬件' }
            ].map((brand, i) => (
              <div 
                key={i}
                className="px-5 py-3 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all flex flex-col items-center justify-center space-y-1 cursor-default group"
              >
                <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{brand.name}</span>
                <span className="text-[10px] text-slate-500 font-mono group-hover:text-blue-500/80 transition-colors font-medium">{brand.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Metrics Section */}
      <section id="accounts" className="py-20 bg-white relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase font-mono font-semibold">Operating Metrics</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">主导/协理账号战绩</p>
              <p className="text-slate-500 text-sm">
                从零孵化百万级与数十万级达人IP，用科学的数据漏斗思维和对社区情绪的精准控制，实现商业与自然流量的双向循环。
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 font-semibold shadow-sm">
              已校验渠道有效链接
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Account 1 */}
            <a 
              href="https://space.bilibili.com/2114609207" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-md bg-blue-50 text-blue-600 border border-blue-200/50">
                    Bilibili 核心 A
                  </span>
                  <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">村上智慧树 (独立主导)</h3>
                  <p className="text-xs text-slate-500 font-mono">从 0 快速孵化至 12万 粉丝</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  主导高商业化自媒体账号。通过场景设计和产品差异化策划，每月稳定承接大厂数码/智能硬件多项商业合作。
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono">粉丝量: 12万+</span>
                <span className="text-blue-600 font-bold group-hover:underline">点击进入空间</span>
              </div>
            </a>

            {/* Account 2 */}
            <a 
              href="https://space.bilibili.com/1587843464" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-md bg-blue-50 text-blue-600 border border-blue-200/50">
                    Bilibili 核心 B
                  </span>
                  <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">硬核数码 (独立主导)</h3>
                  <p className="text-xs text-slate-500 font-mono">从 0 精准累积至 7万+ 粉丝</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  独立全面运营高技术厚度、犀利独到的数码评测阵地，多期精品视频突破行业常规点击，屡次登上全站热门。
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono">粉丝量: 7万+</span>
                <span className="text-blue-600 font-bold group-hover:underline">点击进入空间</span>
              </div>
            </a>

            {/* Account 3 */}
            <a 
              href="https://v.douyin.com/x2AtTiIDEWk/" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-md bg-indigo-50 text-indigo-600 border border-indigo-200/50">
                    抖音科技垂直
                  </span>
                  <ExternalLink size={14} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">50W 粉丝垂类大号</h3>
                  <p className="text-xs text-slate-500 font-mono">核心视频内容主策划</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  负责千万级话题下科技生活向核心视频的选题、脚本拆解与节奏导演，在快节奏语境中精准实现高带货转化。
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono">粉丝量: 50万</span>
                <span className="text-indigo-600 font-bold group-hover:underline">点击查看抖音</span>
              </div>
            </a>

            {/* Account 4 */}
            <a 
              href="https://v.douyin.com/OiaaI6LkGvA/" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-md bg-indigo-50 text-indigo-600 border border-indigo-200/50">
                    抖音百万个人IP
                  </span>
                  <ExternalLink size={14} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">120W 粉丝头部大咖</h3>
                  <p className="text-xs text-slate-500 font-mono">商业短视频内容总顾问</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  主导及指点该头部大卡核心商单的创意视觉，擅长提炼品牌核心痛点，用电影级质感赋能高溢价商单交付。
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono">粉丝量: 120万+</span>
                <span className="text-indigo-600 font-bold group-hover:underline">点击查看抖音</span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Visual Showreel Wide Banner */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center sm:text-left mb-8">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase font-mono font-semibold">Visual Showreel</h2>
            <p className="text-2xl font-bold text-slate-900" style={{ fontSize: '36px' }}>产品Solo、美术、创意合集</p>
          </div>
          
          <a 
            href="https://www.xinpianchang.com/u13909958" 
            target="_blank" 
            rel="noreferrer"
            className="block group relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all"
          >
            {/* Cinematic background */}
            <div className="relative w-full h-[240px] sm:h-[380px] bg-slate-950 flex flex-col justify-between p-6 sm:p-12 overflow-hidden">
              
              {/* Overlay with subtle animated movie scanner line or dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 group-hover:via-black/20 transition-all duration-500 z-10"></div>
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
              
              {/* Artistic Background glow */}
              <div className="absolute top-[20%] right-[30%] w-60 h-60 rounded-full bg-blue-500/10 blur-[80px] group-hover:bg-blue-500/15 transition-all"></div>
              <div className="absolute bottom-[10%] left-[20%] w-80 h-80 rounded-full bg-indigo-600/5 blur-[100px]"></div>

              {/* Top Details */}
              <div className="relative z-20 flex justify-between items-center">
                <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-indigo-400 flex items-center space-x-2 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span>NEW SHOWREEL 2026</span>
                </span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-mono hidden sm:block">新片场官方认证导演</span>
              </div>

              {/* Play Icon and Middle Title */}
              <div className="relative z-20 flex flex-col items-center justify-center space-y-4 my-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-blue-500/30 transition-all duration-300">
                  <Play size={24} className="ml-1 fill-current" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-widest uppercase">导演作品集 · 视觉美学合集</h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-lg mx-auto leading-relaxed">
                    精选过去数年商业广告、产品Solo及极客数码美学短片。每一秒分镜都是光影编排的完美呈现。
                  </p>
                </div>
              </div>

              {/* Bottom detail action */}
              <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/10 text-xs text-slate-400">
                <span className="italic">“电影感的底色，是克制而深邃的高级感。”</span>
                <span className="text-blue-400 font-bold tracking-wider uppercase group-hover:underline flex items-center space-x-1">
                  <span>点击进入新片场主页查看更多</span>
                  <ExternalLink size={12} />
                </span>
              </div>

            </div>
          </a>
        </div>
      </section>

      {/* Works Portfolio Showcase */}
      <section id="works" className="py-20 bg-white border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase font-mono font-semibold">Works Collection</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">分类代表作品实战案例</p>
              <p className="text-slate-500 text-sm max-w-2xl">
                所有视频均配备真实Bilibili/抖音跳转播放。点击卡片右侧直达详情，或选择分类过滤寻找您想了解的题材。
              </p>
            </div>

            {/* Premium Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200 shadow-sm">
              {[
                { id: 'all', label: '全类别' },
                { id: 'commercial', label: '品牌商单' },
                { id: 'narrative', label: '非遗人文' },
                { id: 'viral', label: '爆款数据' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Player Detail Modal / Expanded Pane */}
          <AnimatePresence>
            {selectedWork && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="mb-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-blue-200 shadow-lg relative overflow-hidden"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedWork(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer z-20"
                >
                  <X size={20} />
                </button>

                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Simulated High-Fi Movie Player Screen */}
                  <div className="lg:col-span-7 aspect-video rounded-2xl overflow-hidden bg-slate-950 relative flex flex-col justify-between p-6 border border-slate-850 shadow-inner">
                    {/* Video Header */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span className="flex items-center space-x-1.5">
                        <Video size={12} className="text-blue-500" />
                        <span>PREVIEW PLAYER</span>
                      </span>
                      <span>1080P UltraHD 60FPS</span>
                    </div>

                    {/* Big central play click trigger to direct link */}
                    <a 
                      href={selectedWork.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md hover:scale-110 hover:bg-blue-700 transition-all duration-300 cursor-pointer"
                    >
                      <Play size={22} className="ml-0.5 fill-current" />
                    </a>

                    {/* Simulated Player Controls */}
                    <div className="space-y-3">
                      {/* Video Seek bar */}
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[72%] h-full bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                        <div className="flex items-center space-x-3">
                          <span className="text-blue-400 font-bold">PLAYING</span>
                          <span>04:12 / 05:48</span>
                        </div>
                        <a 
                          href={selectedWork.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-blue-400 hover:underline flex items-center space-x-1 cursor-pointer"
                        >
                          <span>打开原片网页</span>
                          <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Video Specs Info */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold">{selectedWork.tag} / {selectedWork.platform}</span>
                      <h3 className="text-2xl font-black text-slate-950 leading-tight">{selectedWork.title}</h3>
                    </div>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {selectedWork.description}
                    </p>

                    {selectedWork.metric && (
                      <div className="p-3.5 rounded-xl bg-white border border-slate-250 flex items-center justify-between text-xs font-mono shadow-sm">
                        <span className="text-slate-500 uppercase tracking-widest font-semibold font-semibold">爆款核心数据:</span>
                        <span className="text-indigo-600 font-extrabold">{selectedWork.metric}</span>
                      </div>
                    )}

                    <div className="pt-4 flex flex-col sm:flex-row gap-3">
                      <a 
                        href={selectedWork.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-3.5 rounded-xl text-center text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                      >
                        <Play size={14} className="fill-current" />
                        <span>立即跳转外部播放 (BV号直达)</span>
                      </a>
                      <button 
                        onClick={() => handleCopy(selectedWork.url, selectedWork.id)}
                        className="px-5 py-3.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center space-x-1.5 shadow-sm"
                      >
                        {copiedText === selectedWork.id ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                        <span>{copiedText === selectedWork.id ? '复制链接成功' : '分享/复制地址'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cards Portfolio Grid Grouped by Category Subheadings */}
          <div className="space-y-16">
            {displayedCategories.map((cat) => {
              const catWorks = works.filter(w => w.category === cat.id);
              if (catWorks.length === 0) return null;
              
              return (
                <div key={cat.id} className="space-y-8 animate-fade-in">
                  {/* Category Secondary Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-4 border-b border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${cat.color}`} />
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">{cat.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      {cat.subtitle}
                    </span>
                  </div>

                  {/* Cards Grid for this category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <AnimatePresence mode="popLayout">
                      {catWorks.map((work, idx) => (
                        <motion.a
                          layout
                          href={work.url}
                          target="_blank"
                          rel="noreferrer"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          key={work.id}
                          className="group rounded-3xl p-6 bg-slate-50 border border-slate-200 cursor-pointer hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between shadow-sm"
                        >
                          <div className="space-y-4">
                            {/* Top Platform & Category Header */}
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 font-semibold">
                                {work.platform} / {work.tag}
                              </span>
                              <span className={`px-2.5 py-1 text-[10px] rounded-md font-bold border bg-white border-slate-200 ${work.accentText}`}>
                                {cat.id === 'commercial' ? '品牌商单' : cat.id === 'narrative' ? '非遗人文' : '爆款成就'}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">
                              {work.title}
                            </h3>

                            {/* Paragraph */}
                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                              {work.description}
                            </p>
                          </div>

                          {/* Bottom details and link trigger */}
                          <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                            <span className="flex items-center space-x-1 text-slate-400">
                              <ExternalLink size={12} />
                              <span className="text-slate-500">{work.platform} 视频直达</span>
                            </span>
                            <span className="text-blue-600 group-hover:underline flex items-center space-x-1 text-[11px] font-bold">
                              <span>立即观看</span>
                              <ChevronRight size={12} />
                            </span>
                          </div>
                        </motion.a>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fan Trust & Comments Wall Section */}
      <section id="trust" className="py-16 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex items-center space-x-2.5 mb-10">
            <div className="w-1.5 h-7 bg-blue-600 rounded-full" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              粉丝真实互动与咨询记录
            </h2>
          </div>

          {/* Raw images grid of the six screenshots with hover magnification effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.img 
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
              src="/screenshot_1.svg" 
              alt="粉丝互动截图 1" 
              className="w-full h-auto object-contain rounded-lg border border-slate-200 shadow-xs cursor-zoom-in hover:shadow-md transition-all"
              referrerPolicy="no-referrer"
            />
            <motion.img 
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
              src="/screenshot_2.svg" 
              alt="粉丝互动截图 2" 
              className="w-full h-auto object-contain rounded-lg border border-slate-200 shadow-xs cursor-zoom-in hover:shadow-md transition-all"
              referrerPolicy="no-referrer"
            />
            <motion.img 
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
              src="/screenshot_3.svg" 
              alt="粉丝互动截图 3" 
              className="w-full h-auto object-contain rounded-lg border border-slate-200 shadow-xs cursor-zoom-in hover:shadow-md transition-all"
              referrerPolicy="no-referrer"
            />
            <motion.img 
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
              src={regeneratedImage06410} 
              alt="粉丝互动截图 4" 
              className="w-full h-auto object-contain rounded-lg border border-slate-200 shadow-xs cursor-zoom-in hover:shadow-md transition-all"
              referrerPolicy="no-referrer"
            />
            <motion.img 
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
              src={regeneratedImage05622} 
              alt="粉丝互动截图 5" 
              className="w-full h-auto object-contain rounded-lg border border-slate-200 shadow-xs cursor-zoom-in hover:shadow-md transition-all"
              referrerPolicy="no-referrer"
            />
            <motion.img 
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
              src={regeneratedImage04914} 
              alt="粉丝互动截图 6" 
              className="w-full h-auto object-contain rounded-lg border border-slate-200 shadow-xs cursor-zoom-in hover:shadow-md transition-all"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-white border-t border-slate-200 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase font-mono font-semibold">Work Experience</h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">何栋 · 编导执导履历</p>
            <p className="text-slate-500 text-sm">深耕视频内容全流程5年，具备卓越的选题策划、商业转化、脚本导演及中后期把控实力。</p>
          </div>

          {/* Interactive Custom Timeline */}
          <div className="space-y-8 relative before:absolute before:left-4 sm:before:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            
            {/* Timeline item 1 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
              <div className="absolute left-4 sm:left-1/2 -translate-x-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 z-10"></div>
              
              {/* Date Column left */}
              <div className="pl-10 sm:pl-0 sm:w-[45%] text-left sm:text-right">
                <span className="text-xs font-mono font-bold text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 inline-block">
                  2021.12 - 至今
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">深圳沃菲数字营销有限公司</h3>
                <p className="text-xs text-slate-500 mt-1">担任：B站核心编导</p>
              </div>

              {/* Spacer empty element for layout */}
              <div className="hidden sm:block w-[45%]"></div>

              {/* Content Card below / details for desktop layout */}
              <div className="pl-10 sm:pl-0 sm:absolute sm:left-1/2 sm:top-12 sm:translate-x-8 sm:w-[45%] bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2 shadow-sm">
                <div className="font-bold text-slate-850">核心职能：</div>
                <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>主导千万粉丝级大咖账号商业短视频的策划、脚本产出及镜头把控；</li>
                  <li>深入理解大厂产品定位与卖点，负责TCL、美的等品牌高预算、高播放商单内容的高水准交付。</li>
                </ul>
              </div>
            </div>

            {/* Timeline item 2 */}
            <div className="relative flex flex-col sm:flex-row-reverse items-start sm:items-center justify-between gap-4 sm:gap-0 pt-20 sm:pt-32">
              <div className="absolute left-4 sm:left-1/2 -translate-x-1.5 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-indigo-100 z-10"></div>
              
              {/* Date Column left */}
              <div className="pl-10 sm:pl-0 sm:w-[45%] text-left">
                <span className="text-xs font-mono font-bold text-indigo-600 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 inline-block">
                  2020.06 - 2021.06
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">深圳金睿祥龙电子商务</h3>
                <p className="text-xs text-slate-500 mt-1">担任：B站编导</p>
              </div>

              {/* Spacer empty element for layout */}
              <div className="hidden sm:block w-[45%]"></div>

              {/* Content Card below / details */}
              <div className="pl-10 sm:pl-0 sm:absolute sm:right-1/2 sm:top-12 sm:-translate-x-8 sm:w-[45%] bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2 text-left shadow-sm">
                <div className="font-bold text-slate-850">核心职能：</div>
                <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>从0到1深度运营数码生活自媒体矩阵，半年实现7万+死忠数码粉丝增长；</li>
                  <li>多次产出百万播放量的大热单视频，策划案例被平台列为科技垂类优秀典范。</li>
                </ul>
              </div>
            </div>

            {/* Timeline item 3 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 pt-20 sm:pt-32 pb-16 sm:pb-24">
              <div className="absolute left-4 sm:left-1/2 -translate-x-1.5 w-3 h-3 rounded-full bg-violet-600 ring-4 ring-violet-100 z-10"></div>
              
              {/* Date Column left */}
              <div className="pl-10 sm:pl-0 sm:w-[45%] text-left sm:text-right">
                <span className="text-xs font-mono font-bold text-violet-600 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 inline-block">
                  2019.08 - 2020.08
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">深圳好生意贸易有限公司</h3>
                <p className="text-xs text-slate-500 mt-1">担任：文案策划</p>
              </div>

              {/* Spacer empty element for layout */}
              <div className="hidden sm:block w-[45%]"></div>

              {/* Content Card below / details */}
              <div className="pl-10 sm:pl-0 sm:absolute sm:left-1/2 sm:top-12 sm:translate-x-8 sm:w-[45%] bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2 shadow-sm">
                <div className="font-bold text-slate-850">核心职能：</div>
                <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>负责科技数码产品及自营主站的官方自媒体深度运营及文案撰写；</li>
                  <li>全权操盘科技干货与品牌宣传深度长文，积累了极扎实的前期硬核资料检索与逻辑表达功底。</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-200 text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1.5px] shadow-sm">
            <div className="w-full h-full bg-white rounded-[5px] flex items-center justify-center">
              <span className="text-[9px] font-bold text-blue-600">HD</span>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-800 tracking-wider">何栋 (He Dong) 导演与编导作品集</span>
        </div>
        <p className="text-[10px] text-slate-500 max-w-md mx-auto leading-relaxed">
          © 2026 何栋. All rights reserved. 专为视频导演、高级自媒体创意策划及商业内容开发量身定制的无缝交互界面。
        </p>
      </footer>

    </div>
  );
}
