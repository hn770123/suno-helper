Kornの”Life Is Peachy”のサウンド分析とSunoタグの推奨案を作成しますね。

## Kornの”Life Is Peachy”サウンド分析

### アルバムの音楽的特徴

**ジャンル・スタイル:**

- Nu-Metal（ニューメタル）の先駆け
- Groove Metal要素
- ダウンチューンドギター（7弦ギター使用）
- ヒップホップのリズム感の影響

**音響的特徴:**

- 極端に低い音域のギターチューニング
- 重く歪んだギターサウンド
- パーカッシブで攻撃的なドラミング
- スラップベース技法（Fieldy特有のクランキーな音）
- ローファイでラウドなプロダクション
- 生々しく未加工な感じの録音

**ムード・エネルギー:**

- 暗く攻撃的
- 怒りと不安を表現
- 高エネルギー、激しい
- カオティックで不穏な雰囲気

**特徴的な要素:**

- ヘヴィなブレイクダウン
- グルーヴィーなリフ
- ダイナミックな緩急（静と動の対比）

-----

## Sunoタグ推奨設定（“Life Is Peachy”風）

### 必須タグ（優先度：高）

```javascript
const lifeIsPeachyPreset = {
  // Genre & Style
  genre: [
    'Nu-Metal',           // ※既存タグにない場合の代替案↓
    'Heavy Metal',        // 代替1
    'Groove Metal',       // 代替2
    'Industrial Rock',    // 代替3（電子音との融合要素）
    'Alternative Metal'   // 代替4
  ],
  
  // Mood
  mood: [
    'Dark',              // ✓ 既存タグと一致
    'Intense',           // ✓ 既存タグと一致
    'Brooding',          // ✓ 既存タグと一致
    'Aggressive' // ※追加推奨
  ],
  
  // Energy
  energy: 'High Energy', // ✓ 既存タグと一致
  
  // Instrumentation
  instruments: [
    'Electric Guitar',              // ✓ 既存タグと一致
    'Electric Bass',                // ✓ 既存タグと一致（スラップベース）
    'Drums',                        // ✓ 既存タグと一致
    'Distorted Guitar',             // ※追加推奨
    '7-String Guitar',              // ※追加推奨
    'Down-tuned Guitar',            // ※追加推奨
    'Percussive Bass'               // ※追加推奨
  ],
  
  // Production Style
  production: [
    'Distorted',                    // ✓ 既存タグと一致
    'Heavily Compressed',           // ✓ 既存タグと一致
    'Lo-fi Aesthetic',              // ✓ 既存タグと一致（生々しさ）
    'Raw Production',               // ※追加推奨
    'Dry and Intimate',             // ✓ 一部一致（近い音像）
    'Heavy Distortion',             // ※追加推奨
    'Crunchy Tone'                  // ※追加推奨
  ],
  
  // Advanced Tags
  advanced: {
    tempo: 'Medium Tempo',          // ✓ 既存タグと一致（90-120 BPM）
    rhythm: [
      'Syncopated',                 // ✓ 既存タグと一致
      'Groove-oriented',            // ※追加推奨
      'Heavy Breakdown'             // ※追加推奨
    ],
    dynamics: 'Dynamic Shifts',     // ✓ 既存タグと一致
    special: [
      'Palm-Muted Riffs',           // ※追加推奨
      'Drop-Tuned'                  // ※追加推奨
    ]
  }
}
```

-----

## 既存タグとの対応表

### ✅ 既存タグで対応可能なもの

|カテゴリー      |既存タグ              |Life Is Peachy的適合度|
|-----------|------------------|------------------|
|Mood       |Dark              |◎ 完全一致            |
|Mood       |Intense           |◎ 完全一致            |
|Mood       |Brooding          |○ 適合              |
|Energy     |High Energy       |◎ 完全一致            |
|Instruments|Electric Guitar   |◎ 必須              |
|Instruments|Electric Bass     |◎ 必須              |
|Instruments|Drums             |◎ 必須              |
|Production |Distorted         |◎ 完全一致            |
|Production |Heavily Compressed|◎ 完全一致            |
|Production |Lo-fi Aesthetic   |○ 適合              |
|Tempo      |Medium Tempo      |○ 適合              |
|Rhythm     |Syncopated        |○ 適合              |
|Dynamics   |Dynamic Shifts    |◎ 完全一致            |

### ⚠️ 追加推奨タグ（Sunoで使える可能性）

```javascript
const additionalTags = [
  // Genre系
  'Nu-Metal',
  'Groove Metal',
  'Heavy Metal',
  'Alternative Metal',
  'Rap Metal',
  
  // Mood系
  'Aggressive',
  'Angry',
  'Chaotic',
  'Raw',
  
  // 楽器/技法系
  '7-String Guitar',
  'Down-tuned',
  'Drop D Tuning',
  'Slap Bass',
  'Percussive Bass',
  
  // Production系
  'Raw Production',
  'Unpolished',
  'Crunchy',
  'Heavy Bottom End',
  
  // 構造系
  '[Breakdown]',
  '[Heavy Riff]',
  '[Groove Section]'
]
```

-----

## 実際のプロンプト例

### Style Prompt:

```
Heavy Metal, Groove Metal, Dark, Intense, Brooding, High Energy, 
Electric Guitar, Electric Bass, Drums, Distorted, Heavily Compressed, 
Lo-fi Aesthetic, Medium Tempo, Syncopated, Dynamic Shifts, 
7-String Guitar, Drop-Tuned, Raw Production
```

### Structure（メタタグ付き）:

```
[Intro]
[Instrumental]
[Heavy Riff]

[Verse]
[Instrumental]

[Breakdown]
[Instrumental]

[Chorus]
[Instrumental]

[Bridge]
[Instrumental]
[Groove Section]

[Outro]
[Instrumental]
```

-----

## 設定データへの統合案

既存の設定に以下を追加することを推奨します：

```javascript
// genres.rock に追加
{
  value: 'Nu-Metal',
  label: 'ニューメタル',
  desc: 'ヘヴィメタルとヒップホップの融合、ダウンチューン',
  example: 'Korn、Limp Bizkit風の90年代メタル',
  priority: 'high' // Life Is Peachy風には必須
},
{
  value: 'Groove Metal',
  label: 'グルーヴメタル',
  desc: '重いリフとグルーヴ感重視のメタル',
  example: 'Pantera風の重厚なリフ',
  priority: 'high'
},

// moods に追加
{
  value: 'Aggressive',
  label: 'アグレッシブ',
  desc: '攻撃的で激しい',
  priority: 'high' // Life Is Peachy風には必須
},

// instruments に追加
{
  value: '7-String Guitar',
  label: '7弦ギター',
  desc: '超低音域が出せるギター',
  priority: 'high'
},
{
  value: 'Down-tuned Guitar',
  label: 'ダウンチューンドギター',
  desc: '通常より低い音程に調整したギター',
  priority: 'high'
},

// structure.advanced に追加
{
  value: '[Breakdown]',
  label: 'ブレイクダウン',
  desc: '重く遅いリフセクション、メタルの定番',
  priority: 'high'
}
```

このように、Life Is Peachyのサウンドに必要なタグを優先的に表示・推奨できるようにすると良いでしょう！​​​​​​​​​​​​​​​​