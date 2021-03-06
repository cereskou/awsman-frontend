export default {
  route: {
    userPool: 'User Pool',
    cognitoSetting: 'Setting',
    cloudTrail: 'CloudTrail',
    codeCommit: 'CodeCommit',
    codeCommitDiff: 'Different',
    loadBalance: 'Load Balancer',
    setting: 'Setting',
    dashboard: 'Dashboard',
    documentation: 'Documentation',
    construction: 'under construction',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    rolePermission: 'Role Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: 'Mixin',
    backToTop: 'Back To Top',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    mergeHeader: 'Merge Header',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link',
    profile: 'Profile'
  },
  navbar: {
    dashboard: 'Dashboard',
    github: 'Github',
    logOut: 'Log Out',
    profile: 'Profile',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    any: 'any',
    info: 'Assistant for AWS',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !',
    password_length: 'The password can not be less than 6 digits',
    username_required: 'The username is required'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    addRole: 'New Role',
    editPermission: 'Edit',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  page: {
    notfound: 'Not Found',
    notfound_detail: 'The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable。',
    backtohome: 'Go to home',
    forbidden: 'Forbidden',
    return: 'Go back'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  alb: {
    name: 'Name',
    search: 'Search',
    dnsname: 'DNS Name',
    state: 'Status',
    vpcid: 'VPC ID',
    azones: 'AvailabilityZones',
    type: 'Type',
    createdtime: 'Created Time',
    actions: 'Actions',
    detail: 'Detail',
    cancel: 'Cancel',
    listenerid: 'Listener ID',
    arn: 'ARN',
    port: 'Port',
    protocol: 'Protocol',
    sslpolicy: 'Security Policy',
    rulearn: 'ARN',
    conditions: 'IF',
    actions: 'THEN'
  },
  codecommit: {
    id: 'ID',
    name: 'Repository Name',
    branch: 'Branch',
    search: 'Search'
  },
  cloudtrail: {
    id: 'ID',
    name: 'Name',
    source: 'Source',
    username: 'User Name',
    time: 'Time',
    actions: 'Actions',
    detail: 'Detail',
    event: 'Event',
    cancel: 'Cancel',
    search: 'Search'
  },
  cognito: {
    save: 'Save',
    uuid: 'ID',
    id: 'No',
    email: 'Email',
    name: 'Name',
    password: 'Password',
    permanent: 'Temporary',
    status: 'Status',
    createdate: 'Create Date',
    updatedate: 'Update Date',
    actions: 'Actions',
    delete: 'delete',
    group: 'Group',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    syncaws: 'AWS Sync',
    synced: 'sync complete.',
    edit: 'Edit',
    disabled: 'Disable',
    enabled: 'Enable',
    selectgroup: 'Select group',
    required_email: 'Please input email',
    required_password: 'Please input password',
    requirenumbers: 'Please enter your password with at least 8 characters',
    valid_email: 'not a valid email',
    success: 'Success',
    user_updated: 'updated',
    user_disabled: 'The user is disabled.',
    user_enabled: 'The user is enabled.',
    user_created: 'The user has been created.',
    changepassword: 'Set Password',
    confirm: 'Confirm',
    cancel: 'Cancel',
    dialog_disable_message: 'Are you sure to disable this account?',
    dialog_enable_message: 'Are you sure to enable this account?',
    dialog_delete_message: 'Are you sure to delete this aacount?',
    user_deleted: 'The user has been deleted.',
    sort_email_asc: 'Email asc',
    sort_email_desc: 'Email desc',
    sort_enabled_asc: 'Enabled asc',
    sort_enabled_desc: 'Enabled desc',
    sort_group_asc: 'Group asc',
    sort_group_desc: 'Group desc',
    sort_updatedate_asc: 'Update Date asc',
    sort_updatedate_desc: 'Update Date desc',
    item_key: 'Item',
    item_value: 'Value',
    item_desc: 'Description',
    item_category: 'Category',
    delete_msg: 'Are you sure to delete this item?',
    deleted_msg: 'The item has been deleted.',
    temporay_password: 'A temporary password will be sent this email address'
  },  
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name (default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name (default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading PDF.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  }
}
