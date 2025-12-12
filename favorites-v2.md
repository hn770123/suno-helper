素晴らしい補足ありがとうございます！Fieldyのベースとデイヴィッド・シルヴェリアのドラムは確かにLife Is Peachyの核心ですね。Sunoで使えそうなタグを調査して追加します。​​​​​​​​​​​​​​​​

完璧な補足情報ありがとうございます！調査結果を反映して、Life Is Peachy風のタグセットを更新します。

## Life Is Peachy サウンド - 詳細版タグ設定

### ベース関連タグ（Fieldy風）

```javascript
const fieldyBassTags = {
  label: 'ベース（Fieldy風）',
  priority: 'critical', // 最重要
  tags: [
    // ✅ Sunoで確認されているタグ
    { 
      value: 'Slap Bass', 
      label: 'スラップベース', 
      desc: '親指で弦を叩き、指で引っ張る奏法',
      kornRelevance: '◎ Fieldyの代名詞的奏法',
      priority: 'high'
    },
    { 
      value: 'Percussive Bass', 
      label: 'パーカッシブベース', 
      desc: '打楽器的なベース演奏',
      kornRelevance: '◎ クランキーで攻撃的な音',
      priority: 'high'
    },
    { 
      value: 'Funky Bassline', 
      label: 'ファンキーベースライン', 
      desc: 'ファンク的なグルーヴィーなベース',
      kornRelevance: '○ ヒップホップ要素の源',
      priority: 'medium'
    },
    
    // ⚠️ 追加推奨タグ（Sunoで試す価値あり）
    { 
      value: '5-String Bass', 
      label: '5弦ベース', 
      desc: '超低音域が出せるベース',
      kornRelevance: '◎ Fieldyは5弦使用',
      priority: 'high'
    },
    { 
      value: 'Down-tuned Bass', 
      label: 'ダウンチューンドベース', 
      desc: '通常より低い音程に調整したベース',
      kornRelevance: '◎ A♭チューニング',
      priority: 'high'
    },
    { 
      value: 'Crunchy Bass', 
      label: 'クランキーベース', 
      desc: 'バリバリした歪んだベース音',
      kornRelevance: '◎ Fieldyの特徴的な音色',
      priority: 'high'
    },
    { 
      value: 'Clicking Bass', 
      label: 'クリッキングベース', 
      desc: 'カチカチとした打撃音の強いベース',
      kornRelevance: '◎ パーカッシブな金属音',
      priority: 'high'
    }
  ]
}
```

### ドラム関連タグ（David Silveria風）

```javascript
const silveriaDrumTags = {
  label: 'ドラム（David Silveria風）',
  priority: 'critical', // 最重要
  tags: [
    // ✅ Sunoで確認されているタグ
    { 
      value: 'Jazz Brushes', 
      label: 'ジャズブラシ', 
      desc: 'ブラシを使った柔らかいスウィングリズム',
      kornRelevance: '◎ ジャズ奏法の使用',
      priority: 'high'
    },
    { 
      value: 'Swing Groove', 
      label: 'スウィンググルーヴ', 
      desc: 'ジャズ特有の跳ねるリズム',
      kornRelevance: '◎ ヒップホップグルーヴの源',
      priority: 'high'
    },
    { 
      value: 'Tribal Rhythms', 
      label: 'トライバルリズム', 
      desc: '部族音楽的な原始的リズム',
      kornRelevance: '◎ Life Is Peachyの特徴',
      priority: 'high'
    },
    { 
      value: 'Tribal Drums', 
      label: 'トライバルドラム', 
      desc: '部族的な打楽器',
      kornRelevance: '◎ トライバル要素',
      priority: 'high'
    },
    { 
      value: 'Toms', 
      label: 'タム', 
      desc: 'トライバルなフィルのための打楽器',
      kornRelevance: '○ ドラマティックなフィル',
      priority: 'medium'
    },
    { 
      value: 'Explosive Drumming', 
      label: 'エクスプローシブドラミング', 
      desc: '爆発的なドラム演奏',
      kornRelevance: '◎ ハードバップ的な激しさ',
      priority: 'high'
    },
    
    // ⚠️ 追加推奨タグ
    { 
      value: 'Ride Cymbal', 
      label: 'ライドシンバル', 
      desc: 'ジャズで使うシンバル、滑らかな音',
      kornRelevance: '○ ジャズ奏法',
      priority: 'medium'
    },
    { 
      value: 'Syncopated Drums', 
      label: 'シンコペーテッドドラム', 
      desc: '予想外のタイミングで強拍',
      kornRelevance: '◎ ヒップホップ的なグルーヴ',
      priority: 'high'
    },
    { 
      value: 'Polyrhythmic Drums', 
      label: 'ポリリズミックドラム', 
      desc: '複数のリズムが同時進行',
      kornRelevance: '○ 複雑なリズム構造',
      priority: 'medium'
    },
    { 
      value: 'Hard Bop Drumming', 
      label: 'ハードバップドラミング', 
      desc: 'ジャズのハードバップスタイル',
      kornRelevance: '◎ ジャズ+激しさの融合',
      priority: 'high'
    }
  ]
}
```

### 統合版 Life Is Peachy プリセット

```javascript
const lifeIsPeachyPresetV2 = {
  name: 'Life Is Peachy風',
  description: 'Kornの2ndアルバムのサウンドを再現',
  
  // Genre
  genres: [
    { value: 'Nu-Metal', priority: 'critical' },
    { value: 'Groove Metal', priority: 'critical' },
    { value: 'Heavy Metal', priority: 'high' }
  ],
  
  // Mood
  moods: [
    { value: 'Dark', priority: 'critical' },
    { value: 'Intense', priority: 'critical' },
    { value: 'Aggressive', priority: 'critical' },
    { value: 'Brooding', priority: 'high' }
  ],
  
  // Energy
  energy: { value: 'High Energy', priority: 'critical' },
  
  // Instruments
  instruments: {
    guitar: [
      { value: 'Electric Guitar', priority: 'critical' },
      { value: '7-String Guitar', priority: 'critical' },
      { value: 'Down-tuned Guitar', priority: 'critical' }
    ],
    bass: [
      { value: 'Slap Bass', priority: 'critical' },
      { value: 'Percussive Bass', priority: 'critical' },
      { value: '5-String Bass', priority: 'high' },
      { value: 'Crunchy Bass', priority: 'high' },
      { value: 'Clicking Bass', priority: 'high' },
      { value: 'Funky Bassline', priority: 'medium' }
    ],
    drums: [
      { value: 'Drums', priority: 'critical' },
      { value: 'Tribal Rhythms', priority: 'critical' },
      { value: 'Tribal Drums', priority: 'critical' },
      { value: 'Jazz Brushes', priority: 'high' },
      { value: 'Swing Groove', priority: 'high' },
      { value: 'Explosive Drumming', priority: 'high' },
      { value: 'Syncopated Drums', priority: 'high' },
      { value: 'Toms', priority: 'medium' }
    ]
  },
  
  // Production
  production: [
    { value: 'Distorted', priority: 'critical' },
    { value: 'Heavily Compressed', priority: 'critical' },
    { value: 'Lo-fi Aesthetic', priority: 'high' },
    { value: 'Raw Production', priority: 'high' },
    { value: 'Dry and Intimate', priority: 'medium' },
    { value: 'Crunchy Tone', priority: 'high' }
  ],
  
  // Structure
  structure: [
    { value: '[Intro]', priority: 'medium' },
    { value: '[Heavy Riff]', priority: 'high' },
    { value: '[Verse]', priority: 'high' },
    { value: '[Breakdown]', priority: 'critical' },
    { value: '[Chorus]', priority: 'high' },
    { value: '[Bridge]', priority: 'medium' },
    { value: '[Groove Section]', priority: 'critical' },
    { value: '[Outro]', priority: 'medium' }
  ],
  
  // Advanced
  advanced: {
    tempo: { value: 'Medium Tempo', priority: 'high' },
    rhythm: [
      { value: 'Syncopated', priority: 'critical' },
      { value: 'Polyrhythmic', priority: 'high' },
      { value: 'Groove-oriented', priority: 'critical' }
    ],
    dynamics: { value: 'Dynamic Shifts', priority: 'high' },
    special: [
      { value: '[Groove]', priority: 'critical' }, // メタオブジェクト
      { value: 'Palm-Muted Riffs', priority: 'high' },
      { value: 'Drop-Tuned', priority: 'critical' }
    ]
  }
}
```

### 実際のプロンプト例（Life Is Peachy風）

#### Style Prompt:

```
Nu-Metal, Groove Metal, Dark, Intense, Aggressive, High Energy,
7-String Guitar, Down-tuned Guitar, Electric Guitar,
Slap Bass, Percussive Bass, 5-String Bass, Crunchy Bass, Clicking Bass,
Tribal Drums, Tribal Rhythms, Jazz Brushes, Swing Groove, Explosive Drumming, Syncopated Drums,
Distorted, Heavily Compressed, Lo-fi Aesthetic, Raw Production,
Medium Tempo, Groove-oriented, Polyrhythmic, Dynamic Shifts
```

#### Structure（メタタグ付き）:

```
[Intro]
[Instrumental]
[Heavy Riff]
[Groove]

[Verse]
[Instrumental]
[Down-tuned Guitar + Slap Bass]

[Breakdown]
[Instrumental]
[Tribal Drums]
[Percussive Bass]

[Chorus]
[Instrumental]
[Explosive Drumming]

[Groove Section]
[Instrumental]
[Jazz Brushes + Clicking Bass]

[Bridge]
[Instrumental]
[7-String Guitar Solo]

[Outro]
[Instrumental]
[Fade Out]
```

### 設定データへの追加項目

```javascript
// instruments.bass に追加
bass: {
  label: 'ベース',
  icon: '🎸',
  tags: [
    // 既存タグ
    { value: 'Electric Bass', label: 'エレクトリックベース', desc: '電気ベースギター' },
    { value: 'Upright Bass', label: 'アップライトベース', desc: 'コントラバス、ジャズでよく使われる' },
    { value: 'Synth Bass', label: 'シンセベース', desc: 'シンセサイザーのベース音' },
    { value: 'Sub Bass', label: 'サブベース', desc: '超低音域のベース' },
    
    // 新規追加（Life Is Peachy対応）
    { 
      value: 'Slap Bass', 
      label: 'スラップベース', 
      desc: '親指で弦を叩き、指で引っ張る奏法。ファンク、Nu-Metal特有',
      kornTag: true, // Life Is Peachy推奨
      priority: 'high'
    },
    { 
      value: 'Percussive Bass', 
      label: 'パーカッシブベース', 
      desc: '打楽器的なベース演奏。カチカチした金属音が特徴',
      kornTag: true,
      priority: 'high'
    },
    { 
      value: '5-String Bass', 
      label: '5弦ベース', 
      desc: '超低音域が出せるベース（Low B弦追加）',
      kornTag: true,
      priority: 'high'
    },
    { 
      value: 'Down-tuned Bass', 
      label: 'ダウンチューンドベース', 
      desc: '通常より低い音程に調整したベース',
      kornTag: true,
      priority: 'high'
    },
    { 
      value: 'Crunchy Bass', 
      label: 'クランキーベース', 
      desc: 'バリバリした歪んだベース音',
      kornTag: true,
      priority: 'medium'
    },
    { 
      value: 'Clicking Bass', 
      label: 'クリッキングベース', 
      desc: 'カチカチとした打撃音の強いベース',
      kornTag: true,
      priority: 'medium'
    },
    { 
      value: 'Funky Bassline', 
      label: 'ファンキーベースライン', 
      desc: 'ファンク的なグルーヴィーなベース',
      kornTag: true,
      priority: 'medium'
    }
  ]
},

// instruments.percussion に追加
percussion: {
  label: 'パーカッション・ドラム',
  icon: '🥁',
  tags: [
    // 既存タグ
    { value: 'Drums', label: 'ドラムス', desc: 'ドラムセット全般' },
    { value: 'Hand Drums', label: 'ハンドドラム', desc: '手で叩く打楽器（コンガ、ボンゴなど）' },
    { value: 'Percussion', label: 'パーカッション', desc: '各種打楽器' },
    { value: '808s', label: '808', desc: 'ローランドTR-808風のドラムマシン音' },
    { value: 'Drum Machine', label: 'ドラムマシン', desc: '電子ドラム音' },
    { value: 'Tabla', label: 'タブラ', desc: 'インドの打楽器' },
    { value: 'Taiko', label: '太鼓', desc: '日本の伝統的な打楽器' },
    { value: 'Timpani', label: 'ティンパニ', desc: 'オーケストラで使われる大太鼓' },
    
    // 新規追加（Life Is Peachy対応）
    { 
      value: 'Jazz Brushes', 
      label: 'ジャズブラシ', 
      desc: 'ブラシを使った柔らかいスウィングリズム',
      kornTag: true,
      priority: 'high'
    },
    { 
      value: 'Swing Groove', 
      label: 'スウィンググルーヴ', 
      desc: 'ジャズ特有の跳ねるリズム',
      kornTag: true,
      priority: 'high'
    },
    { 
      value: 'Tribal Rhythms', 
      label: 'トライバルリズム', 
      desc: '部族音楽的な原始的リズム',
      kornTag: true,
      priority: 'high'
    },
    { 
      value: 'Tribal Drums', 
      label: 'トライバルドラム', 
      desc: '部族的な打楽器。力強く原始的',
      kornTag: true,
      priority: 'high'
    },
    { 
      value: 'Toms', 
      label: 'タム', 
      desc: 'トライバルなフィルのための打楽器',
      kornTag: true,
      priority: 'medium'
    },
    { 
      value: 'Explosive Drumming', 
      label: 'エクスプローシブドラミング', 
      desc: '爆発的なドラム演奏',
      kornTag: true,
      priority: 'high'
    },
    { 
      value: 'Ride Cymbal', 
      label: 'ライドシンバル', 
      desc: 'ジャズで使うシンバル、滑らかな音',
      kornTag: true,
      priority: 'medium'
    },
    { 
      value: 'Syncopated Drums', 
      label: 'シンコペーテッドドラム', 
      desc: '予想外のタイミングで強拍を入れる',
      kornTag: true,
      priority: 'high'
    },
    { 
      value: 'Polyrhythmic Drums', 
      label: 'ポリリズミックドラム', 
      desc: '複数のリズムが同時進行',
      kornTag: true,
      priority: 'medium'
    },
    { 
      value: 'Hard Bop Drumming', 
      label: 'ハードバップドラミング', 
      desc: 'ジャズのハードバップスタイル、激しく技巧的',
      kornTag: true,
      priority: 'high'
    }
  ]
},

// structure に追加
structure: {
  // ...既存のbasic, advanced, instrumental...
  
  metal: {
    label: 'メタル専用構成',
    icon: '🤘',
    description: 'メタル特有の構成パーツ',
    tags: [
      { 
        value: '[Breakdown]', 
        label: 'ブレイクダウン', 
        desc: '重く遅いリフセクション、メタルの定番',
        kornTag: true,
        priority: 'critical'
      },
      { 
        value: '[Heavy Riff]', 
        label: 'ヘヴィリフ', 
        desc: '重厚なギターリフのセクション',
        kornTag: true,
        priority: 'high'
      },
      { 
        value: '[Groove Section]', 
        label: 'グルーヴセクション', 
        desc: 'グルーヴ重視のリフパート',
        kornTag: true,
        priority: 'critical'
      },
      {
        value: '[Groove]',
        label: 'グルーヴ（メタオブジェクト）',
        desc: 'リズムの自然な流れを強調',
        kornTag: true,
        priority: 'critical'
      }
    ]
  }
}
```

この設定により、Life Is Peachyの核心であるFieldyの5弦スラップベースとSilveriaのジャズ/トライバルドラミングを正確に表現できるようになります！​​​​​​​​​​​​​​​​