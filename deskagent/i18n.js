(function () {
  const translations = {
    en: {
      title: {
        "DeskAgent Mobile | ZJP": "DeskAgent Mobile | ZJP",
        "Download DeskAgent Link | ZJP": "Download DeskAgent Link | ZJP",
        "DeskAgent Mobile Privacy Policy | ZJP": "DeskAgent Mobile Privacy Policy | ZJP",
        "DeskAgent Mobile Support | ZJP": "DeskAgent Mobile Support | ZJP",
        "DeskAgent Mobile Terms | ZJP": "DeskAgent Mobile Terms | ZJP",
        "DeskAgent Privacy Choices | ZJP": "DeskAgent Privacy Choices | ZJP",
        "DeskAgent Privacy Policy | ZJP": "DeskAgent Privacy Policy | ZJP",
        "DeskAgent Source | ZJP": "DeskAgent Source | ZJP",
        "DeskAgent Support | ZJP": "DeskAgent Support | ZJP",
        "DeskAgent Terms | ZJP": "DeskAgent Terms | ZJP"
      },
      text: {
        "Home": "Home",
        "Download": "Download",
        "Support": "Support",
        "Privacy": "Privacy",
        "Terms": "Terms",
        "首页": "Home",
        "下载": "Download",
        "支持": "Support",
        "隐私": "Privacy",
        "条款": "Terms",
        "首次使用": "First Use",
        "下载 Mac Helper": "Download Mac Helper",
        "查看开源项目": "View Open Source",
        "下载并打开 DeskAgent Link": "Download and Open DeskAgent Link",
        "保持 Helper 窗口运行": "Keep the Helper Window Running",
        "手机扫码绑定": "Scan to Pair on iPhone",
        "按提示登录": "Sign In When Prompted",
        "App Store 信息": "App Store Information",
        "隐私政策": "Privacy Policy",
        "支持": "Support",
        "使用条款": "Terms of Use",
        "查看隐私政策": "View Privacy Policy",
        "打开支持页": "Open Support",
        "查看条款": "View Terms",
        "Mac Helper": "Mac Helper",
        "下载 DeskAgent Link": "Download DeskAgent Link",
        "查看安装教程": "View Setup Guide",
        "安装方式": "Installation",
        "安全说明": "Security Notes",
        "开源项目": "Open Source",
        "常见问题": "Common Questions",
        "联系我们": "Contact",
        "Terms": "Terms",
        "Privacy": "Privacy",
        "Open Source": "Open Source",
        "DeskAgent Mobile for iPhone": "DeskAgent Mobile for iPhone",
        "Control your Mac coding agent from iPhone.": "Control your Mac coding agent from iPhone.",
        "DeskAgent Mobile connects to DeskAgent Link on your own Mac. Repositories, command execution, SSH keys, and ChatGPT sign-in stay on the Mac.": "DeskAgent Mobile connects to DeskAgent Link on your own Mac. Repositories, command execution, SSH keys, and ChatGPT sign-in stay on the Mac.",
        "在 Mac 上下载": "Download on your Mac",
        "，解压后打开 Helper。": ", unzip it, then open the Helper.",
        "Helper 会启动本机服务并显示二维码。真实 iPhone 请使用同一 Wi-Fi、Tailscale 或可信 VPN。": "The Helper starts a local service and shows a QR code. For a real iPhone, use the same Wi-Fi, Tailscale, or a trusted VPN.",
        "在 DeskAgent Mobile 里点“扫码绑定 Mac”，扫描 Helper 二维码。二维码只包含短期一次性绑定码。": "In DeskAgent Mobile, tap “Scan to Pair Mac” and scan the Helper QR code. The QR code only contains a short-lived one-time pairing code.",
        "如果 Mac 还没有登录，手机会打开 ChatGPT 授权页。登录凭据保存在 Mac，不会存到手机。": "If the Mac is not signed in, the phone opens the ChatGPT authorization page. Credentials stay on the Mac and are not stored on the phone.",
        "说明手机端保存的数据、Mac Helper 的作用，以及哪些数据不会离开你的设备。": "Explains what the phone stores, what the Mac Helper does, and which data stays on your devices.",
        "查看安装、扫码绑定、网络连接和登录问题的排查方式。": "Find help for installation, QR pairing, network connection, and sign-in issues.",
        "说明 DeskAgent 的使用范围、限制和免责声明。": "Explains DeskAgent usage scope, limits, and disclaimers.",
        "适用于 macOS 14 或更新版本。当前下载包名：": "For macOS 14 or later. Current package name:",
        "下载并解压": "Download and unzip",
        "。": ".",
        "打开": "Open",
        "如果 macOS 提示来自互联网，请确认这是从": "If macOS warns that it came from the internet, confirm it was downloaded from",
        "下载的文件后再打开。": "before opening it.",
        "保持 Helper 窗口运行，然后在 iPhone App 中扫码绑定。": "Keep the Helper window running, then scan to pair in the iPhone app.",
        "DeskAgent Link 只在你的 Mac 上启动本地连接服务。不要把连接地址或 token 发给其他人，也不要把服务暴露到公网。": "DeskAgent Link only starts a local connection service on your Mac. Do not share connection URLs or tokens, and do not expose the service to the public internet.",
        "DeskAgent 的项目源码计划在 GitHub 上公开维护。": "DeskAgent source code is planned to be maintained publicly on GitHub.",
        "公开仓库地址：": "Public repository:",
        "如果 GitHub 页面暂时不可访问，说明仓库或 release 还没有切换为公开状态。App Store 用户可以先通过本站下载 Mac Helper 并查看隐私、支持和条款页面。": "If the GitHub page is not accessible yet, the repository or release has not been made public. App Store users can download the Mac Helper here and view the privacy, support, and terms pages.",
        "© 2026 ZJP · support@zjp73.com": "© 2026 ZJP · support@zjp73.com",
        "DeskAgent Mobile 隐私政策": "DeskAgent Mobile Privacy Policy",
        "最后更新：2026-04-30": "Last updated: 2026-04-30",
        "1. 我们保存的信息": "1. Information We Store",
        "DeskAgent Mobile 会在 iPhone Keychain 中保存你绑定的 Mac 连接信息，例如 WebSocket 地址、一次性绑定后获得的 bearer token、设备名称、默认工作目录和备用连接地址。这些信息用于让手机连接到你自己的 Mac。": "DeskAgent Mobile stores the Mac connection information you pair in iPhone Keychain, such as the WebSocket URL, bearer token received after one-time pairing, device name, default working directory, and alternate connection addresses. This information lets the phone connect to your own Mac.",
        "2. 保存在 Mac 上的信息": "2. Information Kept on Mac",
        "仓库文件、命令执行、SSH key、桌面端配置和 ChatGPT 登录状态保存在你的 Mac 或桌面端环境中。DeskAgent Mobile 不要求你在手机里输入 ChatGPT 密码或 OpenAI API key。": "Repository files, command execution, SSH keys, desktop configuration, and ChatGPT sign-in state remain on your Mac or desktop environment. DeskAgent Mobile does not ask you to enter your ChatGPT password or OpenAI API key on the phone.",
        "3. 账号登录": "3. Account Sign-in",
        "如果需要登录，App 会通过桌面服务发起设备码授权流程，并打开 ChatGPT 授权页面。完成授权后，凭据由 Mac 端环境保存，手机端只负责显示状态和继续连接。": "When sign-in is needed, the app starts a device-code authorization flow through the desktop service and opens the ChatGPT authorization page. After authorization, credentials are stored by the Mac environment. The phone only shows status and continues the connection.",
        "4. 网络传输": "4. Network Transfer",
        "手机会连接到你配置的 Mac Helper 地址。建议使用同一 Wi-Fi、Tailscale 或可信 VPN。不要把 Helper 服务暴露到公网。": "The phone connects to the Mac Helper address you configure. Use the same Wi-Fi, Tailscale, or a trusted VPN. Do not expose the Helper service to the public internet.",
        "5. 第三方服务": "5. Third-party Services",
        "App 可能打开系统浏览器访问 ChatGPT 授权页、DeskAgent 官网、支持页或下载页。相关第三方页面遵循各自的隐私政策。": "The app may open the system browser for ChatGPT authorization, the DeskAgent website, support page, or download page. Third-party pages follow their own privacy policies.",
        "6. 联系我们": "6. Contact Us",
        "隐私相关问题请联系": "For privacy questions, contact",
        "隐私选择与删除数据": "Privacy Choices & Data Deletion",
        "清除 iPhone 本机绑定数据": "Clear iPhone Pairing Data",
        "在 DeskAgent Mobile 中打开“设置”，进入“工作树/连接”，展开“高级手动配置”，点击“重置连接”。这会清除手机保存的 Mac 连接地址、bearer token、默认工作目录和本地偏好。": "In DeskAgent Mobile, open Settings, go to Worktrees / Connection, expand Advanced Manual Setup, then tap Reset Connection. This clears the Mac connection URL, bearer token, default working directory, and local preferences saved on the phone.",
        "清除 Mac Helper 数据": "Clear Mac Helper Data",
        "退出 DeskAgent Link 后，可以删除下载的": "After quitting DeskAgent Link, you can delete the downloaded",
        "仓库文件、SSH key、桌面端配置和 ChatGPT 登录状态仍由你的 Mac 或对应第三方服务管理。": "Repository files, SSH keys, desktop configuration, and ChatGPT sign-in state are still managed by your Mac or the relevant third-party service.",
        "ChatGPT 账号数据": "ChatGPT Account Data",
        "DeskAgent Mobile 不创建 DeskAgent 云账号，也不保存 ChatGPT 密码。ChatGPT 账号、授权和删除请求请通过 ChatGPT/OpenAI 官方账号设置处理。": "DeskAgent Mobile does not create a DeskAgent cloud account or store ChatGPT passwords. Manage ChatGPT accounts, authorization, and deletion requests through the official ChatGPT/OpenAI account settings.",
        "隐私选择或删除数据相关问题请联系": "For privacy choices or data deletion questions, contact",
        "你可以在": "You can use the",
        "页面查看如何清除手机绑定信息和 Mac 端数据。隐私相关问题请联系": "page to learn how to clear iPhone pairing information and Mac-side data. For privacy questions, contact",
        "DeskAgent Mobile 支持": "DeskAgent Mobile Support",
        "遇到问题可以先按下面顺序检查，也可以邮件联系 support@zjp73.com。": "If something goes wrong, check the steps below first, or email support@zjp73.com.",
        "首次安装": "First Installation",
        "在 Mac 上打开": "Open on your Mac:",
        "下载页": "Download page",
        "下载并解压": "Download and unzip",
        "打开 DeskAgent Link，并保持窗口运行。": "Open DeskAgent Link and keep the window running.",
        "在 iPhone App 中点击“扫码绑定 Mac”。": "Tap “Scan to Pair Mac” in the iPhone app.",
        "扫码后连不上": "Cannot Connect After Scanning",
        "确认 Mac 和 iPhone 在同一 Wi-Fi，或都连接到同一个 Tailscale/VPN。": "Make sure Mac and iPhone are on the same Wi-Fi or the same Tailscale/VPN.",
        "确认 DeskAgent Link 仍然打开。": "Make sure DeskAgent Link is still open.",
        "如果二维码过期，请在 Helper 里重新生成并扫码。": "If the QR code expired, regenerate it in the Helper and scan again.",
        "真实 iPhone 不能使用": "A real iPhone cannot use",
        "，请使用 LAN 或 Tailscale 地址。": "; use a LAN or Tailscale address.",
        "登录问题": "Sign-in Issues",
        "如果提示需要登录，请按 App 打开的授权页面完成 ChatGPT 登录。登录凭据保存在 Mac，不会保存在本网站。": "If sign-in is required, complete ChatGPT sign-in in the authorization page opened by the app. Credentials stay on the Mac and are not stored by this website.",
        "联系": "Contact",
        "邮件：": "Email:",
        "DeskAgent Mobile 使用条款": "DeskAgent Mobile Terms of Use",
        "1. 服务范围": "1. Service Scope",
        "DeskAgent Mobile 是连接你自己的 iPhone 和 Mac Helper 的远程控制工具。它不提供云端代理执行服务，也不是任何第三方官方客户端的替代品。": "DeskAgent Mobile is a remote-control tool that connects your own iPhone and Mac Helper. It does not provide cloud agent execution and is not a replacement for any third-party official client.",
        "2. 用户责任": "2. User Responsibilities",
        "你需要确保自己有权访问所绑定的 Mac、仓库、账号和网络环境。不要把 Helper 服务、token、二维码或绑定链接分享给不可信的人。": "You are responsible for ensuring you have permission to access the paired Mac, repositories, accounts, and network environment. Do not share the Helper service, tokens, QR codes, or pairing links with untrusted people.",
        "3. 安全限制": "3. Security Limits",
        "请不要把本地 app-server 暴露到公网。建议使用同一局域网、Tailscale 或可信 VPN。": "Do not expose the local app-server to the public internet. Use the same LAN, Tailscale, or a trusted VPN.",
        "4. 第三方服务": "4. Third-party Services",
        "DeskAgent Mobile 可能配合 ChatGPT、系统浏览器、GitHub 或其他第三方服务使用。第三方服务的可用性、账号、额度和政策由对应服务提供方负责。": "DeskAgent Mobile may be used with ChatGPT, the system browser, GitHub, or other third-party services. Availability, accounts, quotas, and policies are controlled by those providers.",
        "5. 免责声明": "5. Disclaimer",
        "本工具按现状提供。你应自行确认代理执行的命令、文件修改和网络访问是否符合你的预期。": "This tool is provided as is. You should verify that commands, file changes, and network access performed by the agent match your expectations.",
        "条款相关问题请联系": "For terms questions, contact"
      }
    },
    ja: {
      title: {
        "DeskAgent Mobile | ZJP": "DeskAgent Mobile | ZJP",
        "Download DeskAgent Link | ZJP": "DeskAgent Link ダウンロード | ZJP",
        "DeskAgent Mobile Privacy Policy | ZJP": "DeskAgent Mobile プライバシーポリシー | ZJP",
        "DeskAgent Mobile Support | ZJP": "DeskAgent Mobile サポート | ZJP",
        "DeskAgent Mobile Terms | ZJP": "DeskAgent Mobile 利用規約 | ZJP",
        "DeskAgent Privacy Choices | ZJP": "DeskAgent プライバシー選択 | ZJP",
        "DeskAgent Privacy Policy | ZJP": "DeskAgent プライバシーポリシー | ZJP",
        "DeskAgent Source | ZJP": "DeskAgent ソース | ZJP",
        "DeskAgent Support | ZJP": "DeskAgent サポート | ZJP",
        "DeskAgent Terms | ZJP": "DeskAgent 利用規約 | ZJP"
      },
      text: {
        "Home": "ホーム",
        "Download": "ダウンロード",
        "Privacy": "プライバシー",
        "Terms": "規約",
        "首页": "ホーム",
        "下载": "ダウンロード",
        "支持": "サポート",
        "隐私": "プライバシー",
        "条款": "規約",
        "首次使用": "初回利用",
        "下载 Mac Helper": "Mac Helper をダウンロード",
        "查看开源项目": "オープンソースを見る",
        "下载并打开 DeskAgent Link": "DeskAgent Link をダウンロードして開く",
        "保持 Helper 窗口运行": "Helper ウィンドウを開いたままにする",
        "手机扫码绑定": "iPhone でスキャンしてペアリング",
        "按提示登录": "案内に従ってログイン",
        "App Store 信息": "App Store 情報",
        "隐私政策": "プライバシーポリシー",
        "支持": "サポート",
        "使用条款": "利用規約",
        "查看隐私政策": "プライバシーポリシーを見る",
        "打开支持页": "サポートを開く",
        "查看条款": "規約を見る",
        "Mac Helper": "Mac Helper",
        "下载 DeskAgent Link": "DeskAgent Link をダウンロード",
        "查看安装教程": "セットアップガイドを見る",
        "安装方式": "インストール",
        "安全说明": "安全に関する説明",
        "开源项目": "オープンソース",
        "Support": "サポート",
        "常见问题": "よくある質問",
        "联系我们": "お問い合わせ",
        "Terms": "規約",
        "Privacy": "プライバシー",
        "Open Source": "オープンソース",
        "DeskAgent Mobile for iPhone": "iPhone 用 DeskAgent Mobile",
        "Control your Mac coding agent from iPhone.": "iPhone から Mac のコーディングエージェントを操作。",
        "DeskAgent Mobile connects to DeskAgent Link on your own Mac. Repositories, command execution, SSH keys, and ChatGPT sign-in stay on the Mac.": "DeskAgent Mobile は自分の Mac 上の DeskAgent Link に接続します。リポジトリ、コマンド実行、SSH キー、ChatGPT ログインは Mac に残ります。",
        "在 Mac 上下载": "Mac でダウンロード",
        "，解压后打开 Helper。": "を解凍して Helper を開きます。",
        "Helper 会启动本机服务并显示二维码。真实 iPhone 请使用同一 Wi-Fi、Tailscale 或可信 VPN。": "Helper はローカルサービスを起動して QR コードを表示します。実機 iPhone では同じ Wi-Fi、Tailscale、または信頼できる VPN を使ってください。",
        "在 DeskAgent Mobile 里点“扫码绑定 Mac”，扫描 Helper 二维码。二维码只包含短期一次性绑定码。": "DeskAgent Mobile で「スキャンして Mac をペアリング」をタップし、Helper の QR コードをスキャンします。QR コードには短期間だけ有効なワンタイムコードだけが含まれます。",
        "如果 Mac 还没有登录，手机会打开 ChatGPT 授权页。登录凭据保存在 Mac，不会存到手机。": "Mac が未ログインの場合、iPhone が ChatGPT 認証ページを開きます。認証情報は Mac に保存され、iPhone には保存されません。",
        "说明手机端保存的数据、Mac Helper 的作用，以及哪些数据不会离开你的设备。": "iPhone に保存されるデータ、Mac Helper の役割、端末外に出ないデータを説明します。",
        "查看安装、扫码绑定、网络连接和登录问题的排查方式。": "インストール、QR ペアリング、ネットワーク接続、ログイン問題の対処方法を確認できます。",
        "说明 DeskAgent 的使用范围、限制和免责声明。": "DeskAgent の利用範囲、制限、免責事項を説明します。",
        "适用于 macOS 14 或更新版本。当前下载包名：": "macOS 14 以降に対応。現在のパッケージ名:",
        "下载并解压": "ダウンロードして解凍",
        "。": "。",
        "打开": "開く",
        "如果 macOS 提示来自互联网，请确认这是从": "macOS がインターネットから入手したファイルと警告した場合、",
        "下载的文件后再打开。": "からダウンロードしたことを確認してから開いてください。",
        "保持 Helper 窗口运行，然后在 iPhone App 中扫码绑定。": "Helper ウィンドウを開いたままにして、iPhone アプリでスキャンしてペアリングします。",
        "DeskAgent Link 只在你的 Mac 上启动本地连接服务。不要把连接地址或 token 发给其他人，也不要把服务暴露到公网。": "DeskAgent Link は Mac 上でローカル接続サービスだけを起動します。接続 URL や token を他人に送ったり、サービスを公開インターネットに公開したりしないでください。",
        "DeskAgent 的项目源码计划在 GitHub 上公开维护。": "DeskAgent のソースコードは GitHub で公開管理する予定です。",
        "公开仓库地址：": "公開リポジトリ:",
        "如果 GitHub 页面暂时不可访问，说明仓库或 release 还没有切换为公开状态。App Store 用户可以先通过本站下载 Mac Helper 并查看隐私、支持和条款页面。": "GitHub ページにまだアクセスできない場合、リポジトリまたは release がまだ公開されていません。App Store ユーザーはこのサイトから Mac Helper をダウンロードし、プライバシー、サポート、規約ページを確認できます。",
        "© 2026 ZJP · support@zjp73.com": "© 2026 ZJP · support@zjp73.com",
        "DeskAgent Mobile 隐私政策": "DeskAgent Mobile プライバシーポリシー",
        "最后更新：2026-04-30": "最終更新: 2026-04-30",
        "1. 我们保存的信息": "1. 保存する情報",
        "DeskAgent Mobile 会在 iPhone Keychain 中保存你绑定的 Mac 连接信息，例如 WebSocket 地址、一次性绑定后获得的 bearer token、设备名称、默认工作目录和备用连接地址。这些信息用于让手机连接到你自己的 Mac。": "DeskAgent Mobile は、ペアリングした Mac の接続情報を iPhone Keychain に保存します。例: WebSocket URL、ワンタイムペアリング後に取得した bearer token、デバイス名、既定の作業ディレクトリ、代替接続アドレス。これらは iPhone が自分の Mac に接続するために使われます。",
        "2. 保存在 Mac 上的信息": "2. Mac に保存される情報",
        "仓库文件、命令执行、SSH key、桌面端配置和 ChatGPT 登录状态保存在你的 Mac 或桌面端环境中。DeskAgent Mobile 不要求你在手机里输入 ChatGPT 密码或 OpenAI API key。": "リポジトリファイル、コマンド実行、SSH key、デスクトップ設定、ChatGPT ログイン状態は Mac またはデスクトップ環境に保存されます。DeskAgent Mobile は iPhone に ChatGPT パスワードや OpenAI API key の入力を求めません。",
        "3. 账号登录": "3. アカウントログイン",
        "如果需要登录，App 会通过桌面服务发起设备码授权流程，并打开 ChatGPT 授权页面。完成授权后，凭据由 Mac 端环境保存，手机端只负责显示状态和继续连接。": "ログインが必要な場合、アプリはデスクトップサービス経由でデバイスコード認証を開始し、ChatGPT 認証ページを開きます。認証後、資格情報は Mac 側に保存され、iPhone は状態表示と接続継続のみを行います。",
        "4. 网络传输": "4. ネットワーク通信",
        "手机会连接到你配置的 Mac Helper 地址。建议使用同一 Wi-Fi、Tailscale 或可信 VPN。不要把 Helper 服务暴露到公网。": "iPhone は設定された Mac Helper アドレスに接続します。同じ Wi-Fi、Tailscale、または信頼できる VPN の使用を推奨します。Helper サービスを公開インターネットに公開しないでください。",
        "5. 第三方服务": "5. 第三者サービス",
        "App 可能打开系统浏览器访问 ChatGPT 授权页、DeskAgent 官网、支持页或下载页。相关第三方页面遵循各自的隐私政策。": "アプリはシステムブラウザで ChatGPT 認証ページ、DeskAgent 公式サイト、サポートページ、ダウンロードページを開く場合があります。第三者ページにはそれぞれのプライバシーポリシーが適用されます。",
        "6. 联系我们": "6. お問い合わせ",
        "隐私相关问题请联系": "プライバシーに関する質問は",
        "隐私选择与删除数据": "プライバシー選択とデータ削除",
        "清除 iPhone 本机绑定数据": "iPhone のペアリングデータを消去",
        "在 DeskAgent Mobile 中打开“设置”，进入“工作树/连接”，展开“高级手动配置”，点击“重置连接”。这会清除手机保存的 Mac 连接地址、bearer token、默认工作目录和本地偏好。": "DeskAgent Mobile で設定を開き、ワークツリー / 接続に進み、高度な手動設定を展開して「接続をリセット」をタップします。これにより、iPhone に保存された Mac 接続 URL、bearer token、既定の作業ディレクトリ、ローカル設定が消去されます。",
        "清除 Mac Helper 数据": "Mac Helper データを消去",
        "退出 DeskAgent Link 后，可以删除下载的": "DeskAgent Link を終了した後、ダウンロードした",
        "仓库文件、SSH key、桌面端配置和 ChatGPT 登录状态仍由你的 Mac 或对应第三方服务管理。": "リポジトリファイル、SSH key、デスクトップ設定、ChatGPT ログイン状態は、引き続き Mac または該当する第三者サービスで管理されます。",
        "ChatGPT 账号数据": "ChatGPT アカウントデータ",
        "DeskAgent Mobile 不创建 DeskAgent 云账号，也不保存 ChatGPT 密码。ChatGPT 账号、授权和删除请求请通过 ChatGPT/OpenAI 官方账号设置处理。": "DeskAgent Mobile は DeskAgent クラウドアカウントを作成せず、ChatGPT パスワードも保存しません。ChatGPT アカウント、認可、削除リクエストは ChatGPT/OpenAI 公式アカウント設定で管理してください。",
        "隐私选择或删除数据相关问题请联系": "プライバシー選択またはデータ削除に関するお問い合わせ:",
        "你可以在": "次の",
        "页面查看如何清除手机绑定信息和 Mac 端数据。隐私相关问题请联系": "ページで iPhone のペアリング情報と Mac 側データを消去する方法を確認できます。プライバシーに関するお問い合わせ:",
        "DeskAgent Mobile 支持": "DeskAgent Mobile サポート",
        "遇到问题可以先按下面顺序检查，也可以邮件联系 support@zjp73.com。": "問題がある場合は下記を順番に確認してください。support@zjp73.com へメールすることもできます。",
        "首次安装": "初回インストール",
        "在 Mac 上打开": "Mac で開く:",
        "下载页": "ダウンロードページ",
        "打开 DeskAgent Link，并保持窗口运行。": "DeskAgent Link を開き、ウィンドウを開いたままにします。",
        "在 iPhone App 中点击“扫码绑定 Mac”。": "iPhone アプリで「スキャンして Mac をペアリング」をタップします。",
        "扫码后连不上": "スキャン後に接続できない",
        "确认 Mac 和 iPhone 在同一 Wi-Fi，或都连接到同一个 Tailscale/VPN。": "Mac と iPhone が同じ Wi-Fi、または同じ Tailscale/VPN に接続されていることを確認してください。",
        "确认 DeskAgent Link 仍然打开。": "DeskAgent Link が開いたままであることを確認してください。",
        "如果二维码过期，请在 Helper 里重新生成并扫码。": "QR コードが期限切れの場合は、Helper で再生成してスキャンしてください。",
        "真实 iPhone 不能使用": "実機 iPhone は",
        "，请使用 LAN 或 Tailscale 地址。": "を使用できません。LAN または Tailscale アドレスを使ってください。",
        "登录问题": "ログイン問題",
        "如果提示需要登录，请按 App 打开的授权页面完成 ChatGPT 登录。登录凭据保存在 Mac，不会保存在本网站。": "ログインが必要と表示された場合は、アプリが開く認証ページで ChatGPT ログインを完了してください。認証情報は Mac に保存され、このサイトには保存されません。",
        "联系": "連絡先",
        "邮件：": "メール:",
        "DeskAgent Mobile 使用条款": "DeskAgent Mobile 利用規約",
        "1. 服务范围": "1. サービス範囲",
        "DeskAgent Mobile 是连接你自己的 iPhone 和 Mac Helper 的远程控制工具。它不提供云端代理执行服务，也不是任何第三方官方客户端的替代品。": "DeskAgent Mobile は、自分の iPhone と Mac Helper を接続するリモート操作ツールです。クラウド上のエージェント実行サービスは提供せず、第三者公式クライアントの代替でもありません。",
        "2. 用户责任": "2. ユーザーの責任",
        "你需要确保自己有权访问所绑定的 Mac、仓库、账号和网络环境。不要把 Helper 服务、token、二维码或绑定链接分享给不可信的人。": "ペアリングする Mac、リポジトリ、アカウント、ネットワーク環境へのアクセス権があることを確認してください。Helper サービス、token、QR コード、ペアリングリンクを信頼できない人に共有しないでください。",
        "3. 安全限制": "3. セキュリティ制限",
        "请不要把本地 app-server 暴露到公网。建议使用同一局域网、Tailscale 或可信 VPN。": "ローカル app-server を公開インターネットに公開しないでください。同じ LAN、Tailscale、または信頼できる VPN の使用を推奨します。",
        "4. 第三方服务": "4. 第三者サービス",
        "DeskAgent Mobile 可能配合 ChatGPT、系统浏览器、GitHub 或其他第三方服务使用。第三方服务的可用性、账号、额度和政策由对应服务提供方负责。": "DeskAgent Mobile は ChatGPT、システムブラウザ、GitHub、その他の第三者サービスと併用される場合があります。可用性、アカウント、利用枠、ポリシーは各提供者が管理します。",
        "5. 免责声明": "5. 免責事項",
        "本工具按现状提供。你应自行确认代理执行的命令、文件修改和网络访问是否符合你的预期。": "本ツールは現状有姿で提供されます。エージェントが実行するコマンド、ファイル変更、ネットワークアクセスが期待に合うかを自分で確認してください。",
        "条款相关问题请联系": "規約に関する質問は"
      }
    }
  };

  const supported = ["zh", "en", "ja"];
  const params = new URLSearchParams(window.location.search);
  const storage = {
    get(key) {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        // Browser storage can be disabled; language still follows URL/browser.
      }
    }
  };
  const requested = params.get("lang") || storage.get("deskagent-lang");
  const browser = (navigator.language || "en").toLowerCase();
  const language = supported.includes(requested)
    ? requested
    : browser.startsWith("zh")
      ? "zh"
      : browser.startsWith("ja")
        ? "ja"
        : "en";

  storage.set("deskagent-lang", language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;

  const pack = translations[language];
  if (pack && pack.title[document.title]) {
    document.title = pack.title[document.title];
  }

  function translateTextNodes(node) {
    if (!pack) return;
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        const raw = child.nodeValue;
        const trimmed = raw.trim();
        if (trimmed && pack.text[trimmed]) {
          child.nodeValue = raw.replace(trimmed, pack.text[trimmed]);
        }
      } else if (child.nodeType === Node.ELEMENT_NODE && !["SCRIPT", "STYLE", "CODE"].includes(child.tagName)) {
        translateTextNodes(child);
      }
    }
  }

  function addLanguageSwitcher() {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    const wrap = document.createElement("div");
    wrap.className = "language-switcher";
    for (const code of supported) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = code === "zh" ? "中文" : code === "ja" ? "日本語" : "EN";
      button.setAttribute("aria-pressed", code === language ? "true" : "false");
      button.addEventListener("click", () => {
        storage.set("deskagent-lang", code);
        const url = new URL(window.location.href);
        url.searchParams.set("lang", code);
        window.location.href = url.toString();
      });
      wrap.append(button);
    }
    nav.append(wrap);
  }

  translateTextNodes(document.body);
  addLanguageSwitcher();
})();
