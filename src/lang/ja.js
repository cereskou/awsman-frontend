export default {
  route: {
    userPool: 'ユーザープール',
    cognitoSetting: '設定',
    cloudTrail: 'CloudTrail',
    codeCommit: 'CodeCommit',
    codeCommitDiff: '差分',
    loadBalance: 'ロードバランサー',
    setting: '環境設定',
    dashboard: 'トップ',
    documentation: 'ドキュメント',
    construction: '工事中',
    guide: 'ガイド',
    permission: '権限',
    rolePermission: '権限ロール',
    pagePermission: 'ページ権限',
    directivePermission: 'ディレクティブ権限',
    icons: 'アイコン',
    components: 'コンポーネント',
    tinymce: 'TinyMCE',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Drag-And-Drop',
    splitPane: 'パネル',
    avatarUpload: 'アバターアップロード',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: 'コンポーネントMixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag 看板',
    charts: 'チャート',
    keyboardChart: 'Keyboardチャート',
    lineChart: 'Lineチャート',
    mixChart: 'Mixチャート',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'メニュー１',
    'menu1-1': 'メニュー 1-1',
    'menu1-2': 'メニュー 1-2',
    'menu1-2-1': 'メニュー 1-2-1',
    'menu1-2-2': 'メニュー 1-2-2',
    'menu1-3': 'メニュー 1-3',
    menu2: 'メニュー 2',
    Table: 'Table',
    dynamicTable: '可変 Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit Table',
    complexTable: 'Complex Table',
    tab: 'Tab',
    form: 'フォーム',
    createArticle: '投稿作成',
    editArticle: '投稿編集',
    articleList: '投稿リスト',
    errorPages: 'エラーページ',
    page401: '401',
    page404: '404',
    errorLog: 'エラーログ',
    excel: 'Excel',
    exportExcel: '一括エクスポート',
    selectExcel: '複数選択エクスポート',
    mergeHeader: 'ヘッダーマージ',
    uploadExcel: 'アップロード',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'テーマ変更',
    clipboardDemo: 'Clipboard',
    i18n: '多言語',
    externalLink: '外部リンク',
    profile: 'プロフィール'
  },
  navbar: {
    dashboard: 'トップ',
    github: 'GitHub',
    logOut: 'ログアウト',
    profile: 'プロフィール',
    theme: 'テーマ変更',
    size: '画面サイズ'
  },
  login: {
    title: 'ログイン',
    logIn: 'ログイン',
    username: 'ユーザ名',
    password: 'パスワード',
    any: 'password',
    info: 'Assistant for AWS',
    thirdparty: '外部IDでログイン',
    thirdpartyTips: 'ローカル環境ではログインできません。実装が必要です。',
    password_length: 'パスワードは少なくとも6文字必要です。',
    username_required: 'ユーザー名を入力してください。'
  },
  documentation: {
    documentation: 'ドキュメント',
    github: 'Github Link'
  },
  permission: {
    addRole: 'ロール追加',
    editPermission: 'ロール変更',
    roles: 'ロール',
    switchRoles: 'ロール切替',
    tips: 'v-permissionは使えない時があります。例えば: Element-UI の el-tab、 el-table-column 及び他の dom。v-ifを使う必要があります。',
    delete: '削除',
    confirm: '確認',
    cancel: 'キャンセル'
  },
  page: {
    notfound: 'お探しのページが見つかりません。',
    notfound_detail: '一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。',
    backtohome: 'ホームへ',
    forbidden: 'アクセス権限がありません',
    return: '戻る'
  },
  guide: {
    description: 'ガイドは各機能の説明です。',
    button: 'ガイドを見る'
  },
  components: {
    documentation: 'ドキュメント',
    tinymceTips: 'tinymceは管理画面に重要な機能ですが、その同時に落とし穴がありあす。tinymceを使う道のりが大変でした。Tinymceを使う時に各自のプロジェクト状況で判断が必要です。ドキュメントはこちら',
    dropzoneTips: 'Third partyのパッケージを使わず、独自の実装しています。詳細は @/components/Dropzone',
    stickyTips: 'ページの指定位置へスクロールした場合、表示されます。',
    backToTopTips1: 'トップへスクロールが表示されます。',
    backToTopTips2: 'ボタンのスタイルはカスタマイズできます。例えば、show/hide、height、position。 またはElementのel-tooltipを使って、ツールチップを実装できます。',
    imageUploadTips: 'mockjsは使えないため、カスタマイズしています。公式の最新バージョンを使ってください。'
  },
  alb: {
    name: '名前',
    search: '検索',
    dnsname: 'DNS 名',
    state: '状態',
    vpcid: 'VPC ID',
    azones: 'アベイラビリティーゾーン',
    type: '種類',
    createdtime: '作成日',
    actions: '操作',
    detail: '詳細',
    cancel: 'キャンセル',
    listenerid: 'リスナーID',
    arn: 'ARN',
    port: 'ポート',
    protocol: 'プロトコル',
    sslpolicy: 'セキュリティポリシー',
    rulearn: 'ARN',
    conditions: 'IF',
    actions: 'THEN'
  },
  codecommit: {
    id: 'ID',
    name: 'リポジトリ名',
    branch: 'ブランチ',
    search: '検索'
  },
  cloudtrail: {
    id: 'ID',
    name: 'イベント名',
    source: 'ソース',
    username: 'ユーザー名',
    time: '発生日時',
    actions: '操作',
    detail: '詳細',
    event: 'イベント',
    cancel: 'キャンセル',
    search: '検索'
  },
  cognito: {
    save: '保存',
    uuid: 'ID',
    id: '番号',
    email: 'メールアドレス',
    name: '名前',
    password: 'パスワード',
    permanent: '一時的なパスワード',
    status: 'ステータス',
    createdate: '作成日',
    updatedate: '更新日',
    actions: '操作',
    delete: '削除',
    group: 'グループ',
    search: '検索',
    add: '新規作成',
    export: 'エクスポート',
    syncaws: 'AWS同期',
    synced: '同期完了しました。',
    edit: '編集',
    disabled: '無効',
    enabled: '有効',
    selectgroup: 'グループを選択してください。',
    required_email: 'メールアドレスを入力してください。',
    required_password: 'パスワードを入力してください。',
    requirenumbers: '8文字以上でパスワードを入力してください',
    valid_email: 'メール形式で入力してください。',
    success: '成功',
    user_updated: '更新しました。',
    user_disabled: 'ユーザーを無効にしました',
    user_enabled: 'ユーザーを有効にしました',
    user_created: 'ユーザーを新規作成しました',
    changepassword: 'パスワード再設定',
    confirm: '確認',
    ok: 'OK',
    cancel: 'キャンセル',
    dialog_disable_message: 'ユーザーのアカウントを無効にしますか？',
    dialog_enable_message: 'ユーザーのアカウントを有効にしますか？',
    dialog_delete_message: 'このユーザーのアカウントを削除しますか？',
    user_deleted: 'ユーザーを削除しました。',
    sort_email_asc: 'Email（昇順）',
    sort_email_desc: 'Email（降順）',
    sort_enabled_asc: '有効無効（昇順）',
    sort_enabled_desc: '有効無効（降順）',
    sort_group_asc: 'グループ（昇順）',
    sort_group_desc: 'グループ（降順）',
    sort_updatedate_asc: '更新日（昇順）',
    sort_updatedate_desc: '更新日（降順）',
    item_key: '項目',
    item_value: '値',
    item_desc: '説明',
    item_category: 'カテゴリー',
    delete_msg: '削除しますか？',
    deleted_msg: '削除しました。',
    temporay_password: '入力したメールアドレスに「仮パスワード」を送信いたします。'
  },
  table: {
    dynamicTips1: '先頭は固定、最後に追加',
    dynamicTips2: '戦後に追加せず、指定列に追加',
    dragTips1: 'デフォルト順番',
    dragTips2: 'Drag後の順番',
    title: 'タイトル',
    importance: '重要',
    type: 'タイプ',
    remark: '評価',
    search: '検索',
    add: '追加',
    export: 'エクスポート',
    reviewer: 'レビュアー',
    id: '番号',
    date: '日時',
    author: '作成者',
    readings: '閲覧数',
    status: 'ステータス',
    actions: '操作',
    edit: '編集',
    publish: '公開',
    draft: '下書き',
    delete: 'キャンセル',
    cancel: 'キャンセル',
    confirm: '確認'
  },
  example: {
    warning: '新規作成と編集画面は keep-alive を使えないです。keep-alive の include はrouteのキャッシュは使えないです。そのため、component name を使ってキャッシュさせるようにします。このようなキャッシュ機能を作りたい場合，localStorageを使う手があります。もしくは keep-alive の includeを使って、全ページキャッシュする方法はあります。'
  },
  errorLog: {
    tips: '右上のbugアイコンをクリックしてください。',
    description: '管理画面はspaを使う場合が多い、ユーザ体現向上はできますが、想定外エラーが発生する場合があります。Vueはそのエラーハンドリング機能を提供し、エラーレポートができます。',
    documentation: 'ドキュメント'
  },
  excel: {
    export: 'エクスポート',
    selectedExport: 'エクスポート対象を選択してください。',
    placeholder: 'ファイル名を入力してください。'
  },
  zip: {
    export: 'エクスポート',
    placeholder: 'ファイル名を入力してください。'
  },
  pdf: {
    tips: 'window.print() を使ってPDFダウンロードしています。'
  },
  theme: {
    change: 'テーマ切替',
    documentation: 'ドキュメント',
    tips: 'Tips: テーマの切り替え方法はnavbarのtheme-pickと異なります、使い方はドキュメントを確認してください。'
  },
  tagsView: {
    refresh: '更新',
    close: '閉じる',
    closeOthers: 'その他閉じる',
    closeAll: 'すべて閉じる'
  },
  settings: {
    title: 'システムテーマ',
    theme: 'テーマ色',
    tagsView: 'Tags-View 開く',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  }
}
