// Suno プロンプト生成システム - メインスクリプト

// データ定義
const sunoPromptConfig = {
    // サンプルデータ
    samples: {
        titles: [
            'Neon Dreams',
            'Mountain Echo',
            'Digital Sunset',
            'Autumn Memories',
            'Cosmic Journey',
            'Urban Pulse',
            'Forest Whispers',
            'Electric Horizon',
            'Midnight Drive',
            'Ocean Depths',
            'Crystal Cave',
            'Tokyo Nights'
        ],

        themes: [
            {
                text: '未知の銀河を探索する宇宙の旅',
                en: 'A journey through space exploring unknown galaxies'
            },
            {
                text: '雨の夜、居心地の良いカフェでの静かな時間',
                en: 'Rainy evening in a cozy café'
            },
            {
                text: 'ネオンに照らされた街でのハイスピードチェイス',
                en: 'High-speed chase through neon-lit streets'
            },
            {
                text: '日本庭園での穏やかな朝',
                en: 'Peaceful morning in a Japanese garden'
            },
            {
                text: '光と闇の壮大な戦い',
                en: 'Epic battle between light and darkness'
            },
            {
                text: '夏休みの懐かしい思い出',
                en: 'Nostalgic memories of summer vacation'
            },
            {
                text: '深夜3時のアンダーグラウンドテクノクラブ',
                en: 'Underground techno club at 3am'
            },
            {
                text: '古代寺院の遺跡での瞑想',
                en: 'Meditation in ancient temple ruins'
            },
            {
                text: '朝焼けの海岸線をドライブ',
                en: 'Sunrise drive along the coastline'
            },
            {
                text: '近未来都市の喧騒と孤独',
                en: 'Hustle and loneliness in a futuristic city'
            }
        ]
    },

    // Genre & Style
    genres: [
        { value: 'Synthwave', label: 'シンセウェーブ', desc: '80年代風のレトロなシンセサウンド' },
        { value: 'Ambient', label: 'アンビエント', desc: '環境音楽、空間的で瞑想的' },
        { value: 'Techno', label: 'テクノ', desc: '反復的なビート、ダンスミュージック' },
        { value: 'House', label: 'ハウス', desc: '4つ打ちのダンスミュージック' },
        { value: 'Drum and Bass', label: 'ドラムンベース', desc: '高速ブレイクビーツとベースライン' },
        { value: 'IDM', label: 'IDM', desc: 'インテリジェント・ダンス・ミュージック、実験的' },
        { value: 'Orchestral', label: 'オーケストラ', desc: '管弦楽、壮大で映画的' },
        { value: 'Piano Solo', label: 'ピアノソロ', desc: 'ピアノのみの演奏' },
        { value: 'String Quartet', label: '弦楽四重奏', desc: 'ヴァイオリン、ヴィオラ、チェロの編成' },
        { value: 'Minimalist', label: 'ミニマル', desc: 'シンプルなパターンの反復' },
        { value: 'Post-Rock', label: 'ポストロック', desc: 'インストゥルメンタル中心、ビルドアップが特徴' },
        { value: 'Instrumental Rock', label: 'インストロック', desc: 'ボーカルなしのロック' },
        { value: 'Jazz Fusion', label: 'ジャズフュージョン', desc: 'ジャズとロック/ファンクの融合' },
        { value: 'Smooth Jazz', label: 'スムースジャズ', desc: '滑らかで聴きやすいジャズ' },
        { value: 'Epic Orchestral', label: 'エピックオーケストラ', desc: '壮大で英雄的なオーケストラ' },
        { value: 'Film Score', label: 'フィルムスコア', desc: '映画のサウンドトラック風' },
    ],

    // Mood
    moods: [
        { value: 'Uplifting', label: '高揚感のある', desc: '気分を高める、前向きな' },
        { value: 'Melancholic', label: 'メランコリック', desc: '物憂げな、哀愁を帯びた' },
        { value: 'Mysterious', label: 'ミステリアス', desc: '神秘的な、謎めいた' },
        { value: 'Triumphant', label: '勝利の', desc: '凱旋的な、勝ち誇った' },
        { value: 'Nostalgic', label: 'ノスタルジック', desc: '懐かしい、郷愁を誘う' },
        { value: 'Dark', label: 'ダーク', desc: '暗い、重厚な' },
        { value: 'Peaceful', label: 'ピースフル', desc: '平和な、穏やかな' },
        { value: 'Intense', label: 'インテンス', desc: '激しい、緊張感のある' },
        { value: 'Playful', label: 'プレイフル', desc: '遊び心のある、軽快な' },
        { value: 'Ethereal', label: 'エーテリアル', desc: '幽玄な、この世のものでない' },
        { value: 'Dreamy', label: 'ドリーミー', desc: '夢見心地の、幻想的な' },
    ],

    // Energy
    energies: [
        { value: 'High Energy', label: 'ハイエナジー', desc: '高エネルギー、激しく活発' },
        { value: 'Medium Energy', label: 'ミディアムエナジー', desc: '中程度の勢い' },
        { value: 'Low Energy', label: 'ローエナジー', desc: '低エネルギー、控えめ' },
        { value: 'Building', label: 'ビルディング', desc: '徐々に盛り上がっていく' },
        { value: 'Explosive', label: 'エクスプローシブ', desc: '爆発的な、一気に解放される' },
        { value: 'Subdued', label: 'サブデュード', desc: '抑制された、静かな' },
        { value: 'Dynamic', label: 'ダイナミック', desc: '変化に富んだ、強弱の差が大きい' }
    ],

    // Instrumentation
    instruments: [
        { value: 'Piano', label: 'ピアノ', desc: 'アコースティックピアノ' },
        { value: 'Synthesizer', label: 'シンセサイザー', desc: '電子音を生成する楽器' },
        { value: 'Strings (Legato)', label: 'ストリングス（レガート）', desc: '滑らかに繋がった弦楽器の演奏' },
        { value: 'Electric Guitar', label: 'エレクトリックギター', desc: '電気ギター、エフェクト可能' },
        { value: 'Acoustic Guitar', label: 'アコースティックギター', desc: '生ギター' },
        { value: 'Drums', label: 'ドラムス', desc: 'ドラムセット全般' },
        { value: 'Electric Bass', label: 'エレクトリックベース', desc: '電気ベースギター' },
        { value: 'Saxophone', label: 'サックス', desc: 'ジャズでよく使われる木管楽器' },
        { value: 'Violin', label: 'ヴァイオリン', desc: '高音域の弦楽器' },
        { value: 'Cello', label: 'チェロ', desc: '低音域の弦楽器、温かみのある音色' },
        { value: 'Synth Pad', label: 'シンセパッド', desc: '持続音を出すシンセサイザー、背景音に' },
        { value: '808s', label: '808', desc: 'ローランドTR-808風のドラムマシン音' },
    ],

    // Production Style
    production: [
        { value: 'Lo-fi Aesthetic', label: 'Lo-fi（ローファイ）', desc: '意図的に低音質、温かみのある音' },
        { value: 'Crystal Clear Production', label: 'クリスタルクリア', desc: '透明感のある高音質' },
        { value: 'Analog Warmth', label: 'アナログウォームス', desc: 'アナログ機材の温かみのある音' },
        { value: 'Reverb-drenched', label: 'リバーブたっぷり', desc: '残響音が多く、空間的' },
        { value: 'Dry and Intimate', label: 'ドライ＆親密', desc: '残響が少なく、近い音' },
        { value: 'Spatial and Wide', label: 'スペーシャル＆ワイド', desc: '広がりのあるステレオ感' },
        { value: 'Layered Textures', label: 'レイヤードテクスチャー', desc: '多層的に重ねられた音' },
    ],

    // Song Structure
    structure: [
        { value: '[Intro]', label: 'イントロ', desc: '曲の導入部分' },
        { value: '[Verse]', label: 'ヴァース', desc: 'Aメロ相当、主要なメロディパート' },
        { value: '[Chorus]', label: 'コーラス', desc: 'サビ、最も印象的な部分' },
        { value: '[Bridge]', label: 'ブリッジ', desc: '橋渡し部分、曲に変化をつける' },
        { value: '[Build-up]', label: 'ビルドアップ', desc: '徐々に盛り上がっていく部分' },
        { value: '[Drop]', label: 'ドロップ', desc: 'EDMなどで盛り上がりが爆発する部分' },
        { value: '[Break]', label: 'ブレイク', desc: '一旦リズムや音を減らす部分' },
        { value: '[Outro]', label: 'アウトロ', desc: '曲の終わり、エンディング' },
    ]
};

// 選択状態を管理
const selections = {
    title: '',
    theme: '',
    genre: [],
    mood: [],
    energy: null,
    instruments: [],
    production: [],
    structure: []
};

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    initializeTags();
    setupEventListeners();
    updatePreview();
});

// タグボタンを生成
function initializeTags() {
    renderTags('genre-tags', sunoPromptConfig.genres, 'genre', false);
    renderTags('mood-tags', sunoPromptConfig.moods, 'mood', true);
    renderTags('energy-tags', sunoPromptConfig.energies, 'energy', false);
    renderTags('instrument-tags', sunoPromptConfig.instruments, 'instruments', true);
    renderTags('production-tags', sunoPromptConfig.production, 'production', true);
    renderTags('structure-tags', sunoPromptConfig.structure, 'structure', true);
}

// タグを描画
function renderTags(containerId, tags, category, allowMultiple) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    tags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-button';
        button.innerHTML = `
            <span class="tag-label">${tag.label}</span>
            <span class="tag-value">${tag.value}</span>
            <span class="tag-desc">${tag.desc}</span>
        `;

        button.addEventListener('click', () => {
            handleTagClick(button, tag, category, allowMultiple);
        });

        container.appendChild(button);
    });
}

// タグクリック処理
function handleTagClick(button, tag, category, allowMultiple) {
    if (allowMultiple) {
        // 複数選択可能
        button.classList.toggle('selected');

        if (button.classList.contains('selected')) {
            if (Array.isArray(selections[category])) {
                selections[category].push(tag.value);
            } else {
                selections[category] = [tag.value];
            }
        } else {
            if (Array.isArray(selections[category])) {
                selections[category] = selections[category].filter(v => v !== tag.value);
            }
        }
    } else {
        // 単一選択
        const container = button.parentElement;
        container.querySelectorAll('.tag-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');

        if (category === 'energy') {
            selections[category] = tag.value;
        } else if (category === 'genre') {
            selections[category] = [tag.value];
        }
    }

    updatePreview();
}

// イベントリスナーを設定
function setupEventListeners() {
    document.getElementById('title').addEventListener('input', (e) => {
        selections.title = e.target.value;
        updatePreview();
    });

    document.getElementById('theme').addEventListener('input', (e) => {
        selections.theme = e.target.value;
        updatePreview();
    });

    document.getElementById('copy-btn').addEventListener('click', copyToClipboard);
    document.getElementById('reset-btn').addEventListener('click', resetAll);

    // サンプル選択ボタン
    document.getElementById('sample-title-btn').addEventListener('click', () => {
        toggleSampleList('sample-title-list', 'titles');
    });

    document.getElementById('sample-theme-btn').addEventListener('click', () => {
        toggleSampleList('sample-theme-list', 'themes');
    });
}

// サンプルリストの表示切り替え
function toggleSampleList(listId, type) {
    const listElement = document.getElementById(listId);

    // 既に表示されている場合は非表示にする
    if (!listElement.classList.contains('hidden')) {
        listElement.classList.add('hidden');
        return;
    }

    // 他のサンプルリストを閉じる
    document.querySelectorAll('.sample-list').forEach(list => {
        list.classList.add('hidden');
    });

    // サンプルリストを生成
    listElement.innerHTML = '';

    if (type === 'titles') {
        sunoPromptConfig.samples.titles.forEach(title => {
            const item = document.createElement('div');
            item.className = 'sample-item';
            item.textContent = title;
            item.addEventListener('click', () => {
                document.getElementById('title').value = title;
                selections.title = title;
                updatePreview();
                listElement.classList.add('hidden');
            });
            listElement.appendChild(item);
        });
    } else if (type === 'themes') {
        sunoPromptConfig.samples.themes.forEach(theme => {
            const item = document.createElement('div');
            item.className = 'sample-item';
            item.innerHTML = `
                <div class="sample-theme-text">${theme.text}</div>
                <div class="sample-theme-en">${theme.en}</div>
            `;
            item.addEventListener('click', () => {
                document.getElementById('theme').value = theme.en;
                selections.theme = theme.en;
                updatePreview();
                listElement.classList.add('hidden');
            });
            listElement.appendChild(item);
        });
    }

    listElement.classList.remove('hidden');
}

// プレビュー更新
function updatePreview() {
    const prompt = generatePrompt();

    document.getElementById('preview-title').textContent = prompt.title;
    document.getElementById('preview-theme').textContent = prompt.description || '-';
    document.getElementById('preview-style').textContent = prompt.style || '-';
    document.getElementById('preview-lyrics').textContent = prompt.lyrics;
}

// プロンプト生成
function generatePrompt() {
    const styleElements = [
        ...selections.genre,
        ...selections.mood,
        selections.energy,
        ...selections.instruments,
        ...selections.production
    ].filter(Boolean);

    const stylePrompt = styleElements.join(', ');

    // 構造
    let structuredPrompt = '';
    if (selections.structure.length > 0) {
        structuredPrompt = selections.structure.map(section =>
            `${section}\n[Instrumental]`
        ).join('\n\n');
    } else {
        // デフォルト構造
        structuredPrompt = `[Intro]\n[Instrumental]\n\n[Verse]\n[Instrumental]\n\n[Chorus]\n[Instrumental]\n\n[Outro]\n[Instrumental]`;
    }

    return {
        title: selections.title || 'Untitled',
        description: selections.theme,
        style: stylePrompt,
        lyrics: structuredPrompt
    };
}

// クリップボードにコピー
function copyToClipboard() {
    const prompt = generatePrompt();

    // プレーンテキストとして構築（スペースと改行を保持）
    const fullPrompt = `Title: ${prompt.title}

Theme/Description: ${prompt.description || 'N/A'}

Style Prompt:
${prompt.style || 'N/A'}

Lyrics (Custom Mode):
${prompt.lyrics}

[Instrumental]
`;

    // Clipboard APIを使用してプレーンテキストとしてコピー
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(fullPrompt).then(() => {
            showCopyMessage('✅ プロンプトをクリップボードにコピーしました！');
        }).catch((err) => {
            console.error('Clipboard API failed:', err);
            fallbackCopyToClipboard(fullPrompt);
        });
    } else {
        // Clipboard APIが利用できない場合のフォールバック
        fallbackCopyToClipboard(fullPrompt);
    }
}

// フォールバックコピー機能（古いブラウザ対応）
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyMessage('✅ プロンプトをクリップボードにコピーしました！');
        } else {
            showCopyMessage('❌ コピーに失敗しました');
        }
    } catch (err) {
        console.error('Fallback copy failed:', err);
        showCopyMessage('❌ コピーに失敗しました');
    }

    document.body.removeChild(textArea);
}

// コピーメッセージ表示
function showCopyMessage(message) {
    const messageEl = document.getElementById('copy-message');
    messageEl.textContent = message;

    setTimeout(() => {
        messageEl.textContent = '';
    }, 3000);
}

// リセット
function resetAll() {
    // 選択をクリア
    selections.title = '';
    selections.theme = '';
    selections.genre = [];
    selections.mood = [];
    selections.energy = null;
    selections.instruments = [];
    selections.production = [];
    selections.structure = [];

    // 入力フィールドをクリア
    document.getElementById('title').value = '';
    document.getElementById('theme').value = '';

    // 全ボタンの選択を解除
    document.querySelectorAll('.tag-button.selected').forEach(btn => {
        btn.classList.remove('selected');
    });

    updatePreview();
    showCopyMessage('🔄 リセットしました');
}
