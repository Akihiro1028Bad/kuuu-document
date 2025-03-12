import React, { useState, useEffect } from 'react';

const KuuuDocument = () => {
  // くぅーレベルと回数を管理するstate
  const [kuuuCount, setKuuuCount] = useState(0);
  const [kuuuLevel, setKuuuLevel] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [kuuuVariation, setKuuuVariation] = useState('くぅー');
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('definition');
  
  // くぅーのバリエーション配列
  const kuuuVariations = [
    'くぅー',
    'くぅー！',
    'くぅーっ！',
    'くぅぅぅー',
    'くぅぅぅー！！',
    'くぅぅぅーっ！！！',
    'まさに...くぅー！',
    'これこそが、くぅー！',
    'くぅーですよ...！',
    'くぅーです。'
  ];
  
  // レベルに応じたタイトル
  const levelTitles = [
    'くぅー初心者',
    'くぅーアマチュア',
    'くぅープロフェッショナル',
    'くぅーマスター',
    'くぅーグランドマスター',
    'くぅーの神'
  ];
  
  // くぅーボタンをクリックした時の処理
  const handleKuuuClick = () => {
    const newCount = kuuuCount + 1;
    setKuuuCount(newCount);
    
    // 新しいレベルを計算
    const newLevel = Math.min(5, Math.floor(newCount / 10));
    setKuuuLevel(newLevel);
    
    // ランダムなくぅーバリエーションを選択
    const randomVariation = kuuuVariations[Math.floor(Math.random() * (Math.min(newLevel + 3, kuuuVariations.length)))];
    setKuuuVariation(randomVariation);
    
    // アニメーション表示
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };
  
  // テーマ切り替え
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // 背景色と文字色の設定
  const bgColor = theme === 'light' ? 'bg-gradient-to-br from-blue-50 to-purple-100' : 'bg-gradient-to-br from-gray-900 to-purple-900';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-gray-100';
  const cardBg = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const buttonBg = theme === 'light' ? 'bg-gradient-to-r from-purple-500 to-indigo-600' : 'bg-gradient-to-r from-purple-700 to-indigo-800';
  const tabActiveBg = theme === 'light' ? 'bg-indigo-100' : 'bg-indigo-900';
  
  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-4 transition-colors duration-300`}>
      {/* ヘッダー */}
      <header className="max-w-4xl mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          くぅー（kuuー）
        </h1>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>
      
      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto">
        <div className={`${cardBg} rounded-xl shadow-xl p-6 mb-8 transition-colors duration-300`}>
          <h2 className="text-xl font-semibold mb-4">📌 このドキュメントについて</h2>
          <p className="mb-2">
            本ドキュメントは、日本語の感嘆詞 <strong>「くぅー（kuuー）」</strong> の意味・用法・発音・文化的背景について詳しく解説したものです。
          </p>
          <p>日常会話やSNSなどで使われるこの表現を、適切に理解し活用できるようにすることを目的としています。</p>
        </div>
        
        {/* くぅー体験セクション */}
        <div className={`${cardBg} rounded-xl shadow-xl p-6 mb-8 text-center relative overflow-hidden transition-colors duration-300`}>
          <h2 className="text-xl font-semibold mb-2">🎮 くぅー体験ゾーン</h2>
          <p className="mb-4">ボタンを押して「くぅー」を体験してみましょう！</p>
          
          <div className="mb-6 relative h-20">
            {showAnimation && (
              <div className="absolute inset-0 flex items-center justify-center animate-bounce">
                <span className="text-2xl font-bold">{kuuuVariation}</span>
              </div>
            )}
            {!showAnimation && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold opacity-50">ここにくぅーが表示されます</span>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <button 
              onClick={handleKuuuClick}
              className={`${buttonBg} text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
            >
              くぅーする！
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className={`${theme === 'light' ? 'bg-purple-100' : 'bg-purple-900'} rounded-lg p-3 flex-1 transition-colors duration-300`}>
              <h3 className="font-medium mb-1">くぅー回数</h3>
              <p className="text-2xl font-bold">{kuuuCount}</p>
            </div>
            <div className={`${theme === 'light' ? 'bg-indigo-100' : 'bg-indigo-900'} rounded-lg p-3 flex-1 transition-colors duration-300`}>
              <h3 className="font-medium mb-1">くぅーレベル</h3>
              <p className="text-2xl font-bold">{kuuuLevel}</p>
            </div>
            <div className={`${theme === 'light' ? 'bg-blue-100' : 'bg-blue-900'} rounded-lg p-3 flex-1 transition-colors duration-300`}>
              <h3 className="font-medium mb-1">称号</h3>
              <p className="text-xl font-bold">{levelTitles[kuuuLevel]}</p>
            </div>
          </div>
          
          {/* レベルアップ条件の表示 */}
          {kuuuLevel < 5 && (
            <p className="mt-4 text-sm">
              次のレベルまであと {10 - (kuuuCount % 10)} 回のくぅーが必要です
            </p>
          )}
        </div>
        
        {/* ドキュメント本体 タブ切り替え */}
        <div className={`${cardBg} rounded-xl shadow-xl overflow-hidden transition-colors duration-300`}>
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button 
              onClick={() => setActiveTab('definition')}
              className={`py-3 px-4 text-sm md:text-base font-medium ${activeTab === 'definition' ? `${tabActiveBg} ${textColor}` : 'bg-transparent text-gray-500'} transition-colors duration-200`}
            >
              定義
            </button>
            <button 
              onClick={() => setActiveTab('grammar')}
              className={`py-3 px-4 text-sm md:text-base font-medium ${activeTab === 'grammar' ? `${tabActiveBg} ${textColor}` : 'bg-transparent text-gray-500'} transition-colors duration-200`}
            >
              文法情報
            </button>
            <button 
              onClick={() => setActiveTab('usage')}
              className={`py-3 px-4 text-sm md:text-base font-medium ${activeTab === 'usage' ? `${tabActiveBg} ${textColor}` : 'bg-transparent text-gray-500'} transition-colors duration-200`}
            >
              意味と用法
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'definition' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">🎯 1. 定義</h2>
                <p className="mb-4">
                  <strong>くぅー（kuuー）</strong> は、日本語の感嘆詞の一種であり、以下のような感情を表現する際に使われます。
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li className="mb-2"><strong>リラックス感・満足感</strong></li>
                  <li className="mb-2"><strong>驚き・感動</strong></li>
                </ul>
                <p>発音時に母音を引き伸ばすことで、感情の度合いを強調することができます。</p>
              </div>
            )}
            
            {activeTab === 'grammar' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">📝 2. 文法情報</h2>
                
                <h3 className="text-lg font-medium mb-2">📌 2.1. 品詞分類</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li><strong>感動詞（interjection）</strong></li>
                </ul>
                
                <h3 className="text-lg font-medium mb-2">🔊 2.2. 発音</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li><strong>IPA表記</strong>：/kuː/</li>
                  <li><strong>カタカナ表記</strong>：クゥー</li>
                  <li><strong>音声的特徴</strong>：発音の長さによって感情の強さが変化</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'usage' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">💬 3. 意味と用法</h2>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">🎐 3.1. リラックス感・満足感の表現</h3>
                  <p className="mb-2">快適さや満足感を得た際に自然に発せられます。</p>
                  <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} p-3 rounded-lg mb-4 transition-colors duration-300`}>
                    <h4 className="font-medium mb-2">✅ 例文</h4>
                    <ul className="space-y-2">
                      <li>「<strong>くぅー、温泉はやっぱり最高だな。</strong>」 🛁（温泉でリラックス）</li>
                      <li>「<strong>くぅー、コーヒーが体に染みる…</strong>」 ☕（美味しいコーヒーを飲んで安らぐ）</li>
                      <li>「<strong>くぅー、仕事終わりのビールがたまらん！</strong>」 🍺（ビールの爽快感を楽しむ）</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">🤩 3.2. 驚き・感動の表現</h3>
                  <p className="mb-2">驚きや感動を伴う場面で使用されます。</p>
                  <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} p-3 rounded-lg mb-4 transition-colors duration-300`}>
                    <h4 className="font-medium mb-2">✅ 例文</h4>
                    <ul className="space-y-2">
                      <li>「<strong>くぅー、これはすごい発明だ！</strong>」 🏆（驚きや感心）</li>
                      <li>「<strong>くぅー、これはやられた！</strong>」 🎮（相手の巧妙さに驚く）</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">🌟🎭 3.3. 「くぅー」のみで感情を伝える（上級者向け）</h3>
                  <p className="mb-2">言葉を省略して「くぅー」だけで感情を表現することも可能です。文脈次第で、感嘆詞として十分に意味が伝わります。</p>
                  <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} p-3 rounded-lg mb-4 transition-colors duration-300`}>
                    <h4 className="font-medium mb-2">✅ 例文</h4>
                    <ul className="space-y-2">
                      <li>（ビールを一口飲んで満足感と爽快感を噛みしめながら）<strong>「くぅー」</strong> 🍺</li>
                      <li>（温泉につかってじんわりと癒やされる瞬間）<strong>「くぅ～」</strong> ♨️</li>
                      <li>（スポーツ観戦で劇的な逆転ゴールが決まる）<strong>「くぅーっ！」</strong> ⚽🔥</li>
                    </ul>
                  </div>
                </div>
                
                {kuuuLevel >= 3 && (
                  <>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">🌟🏆 3.4. 「くぅー」を強調する表現（プロフェッショナル向け）</h3>
                      <p className="mb-2">「くぅー」の前に補助的な言葉をつけることで、感情の強調や文脈の補足が可能になります。</p>
                      <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} p-3 rounded-lg mb-4 transition-colors duration-300`}>
                        <h4 className="font-medium mb-2">✅ 例文</h4>
                        <ul className="space-y-2">
                          <li>（最高のビールを味わいながら）<strong>「これこそが、くぅーっ！」</strong> 🍺</li>
                          <li>（ずっと探し求めていた味を見つけた時）<strong>「これが本物の…くぅーっ！」</strong> 🍺</li>
                          <li>（完成度の高い料理を食べた瞬間）<strong>「まさに…くぅーっ！」</strong> 🍽️</li>
                          <li>（絶景を前にして）<strong>「これはまちがいなく…くぅーっ！」</strong> 🌄</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">🌟🏆 3.5. 「くぅー」をフォーマルにする表現（プロフェッショナル向け）</h3>
                      <p className="mb-2">「くぅー」に「です」や「ですよ」を付け加えることで、フォーマルな場面でも適用しやすい表現にできます。</p>
                      <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} p-3 rounded-lg mb-4 transition-colors duration-300`}>
                        <h4 className="font-medium mb-2">✅ 例文</h4>
                        <ul className="space-y-2">
                          <li>（目の前の絶景に感動しつつ）<strong>「くぅーですよ…！」</strong> 🌅</li>
                          <li>（美味しい料理をじっくり味わいながら）<strong>「これはまさに、くぅーです。」</strong> 🍽️</li>
                          <li>（感動を伝えつつ丁寧さを出す）<strong>「これはくぅーですね。」</strong> 🏆</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                
                {kuuuLevel < 3 && (
                  <div className={`${theme === 'light' ? 'bg-yellow-100' : 'bg-yellow-900'} p-4 rounded-lg mb-6 transition-colors duration-300`}>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">🔒 上級者向けコンテンツ</h3>
                    <p>くぅーレベル3以上で解放されるプロフェッショナル向けコンテンツがあります。「くぅーする！」ボタンを押して、もっと多くの「くぅー」を極めましょう！</p>
                  </div>
                )}
                
                <div className="mt-8 mb-4">
                  <h3 className="text-xl font-semibold mb-2">🎊 まとめ</h3>
                  <p>「くぅー」は、リラックス感や驚きを伝えるのに適した表現であり、日常会話で幅広く使われます。カジュアルな場面では自然に使えるため、日本語学習者にもおすすめの表現です。</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* フッター */}
      <footer className="max-w-4xl mx-auto mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 くぅー公式ドキュメント</p>
        <p className="mt-1">あなたのくぅーレベル: {levelTitles[kuuuLevel]} （{kuuuCount}回）</p>
      </footer>
    </div>
  );
};

export default KuuuDocument;