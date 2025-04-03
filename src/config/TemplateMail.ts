const registerEmailTemplate = (activeLink: string, username: string) => `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>メールアドレス確認</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 24px;
            color: #333333;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            color: #555555;
            margin-bottom: 20px;
        }
        a.button {
            display: inline-block;
            padding: 12px 24px;
            font-size: 18px;
            color: #ffffff;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 6px;
            transition: background-color 0.3s ease;
        }
        a.button:hover {
            background-color: #0056b3;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #999999;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${username}様、こんにちは！</h1>
        <p>
            この度はご登録いただきありがとうございます。<br>
            以下のリンクをクリックして、メールアドレスの確認を完了してください。
        </p>
        <p style="text-align: center;">
            <a href="${activeLink}" class="button">メールアドレスを確認する</a>
        </p>
        <p>
            よろしくお願いいたします。
        </p>
        <div class="footer">
            &copy; 2025 Trial. All rights reserved.
        </div>
    </div>
</body>
</html>
`;


const resetPasswordEmailTemplate = (activeLink: string, username: string) => `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>パスワードリセット</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 24px;
            color: #333333;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            color: #555555;
            margin-bottom: 20px;
        }
        a.button {
            display: inline-block;
            padding: 12px 24px;
            font-size: 18px;
            color: #ffffff;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 6px;
            transition: background-color 0.3s ease;
        }
        a.button:hover {
            background-color: #0056b3;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #999999;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${username}様、こんにちは！</h1>
        <p>
           以下のリンクを開き、パスワードリセットを行ってください。
        </p>
        <p style="text-align: center;">
            <a href="${activeLink}" class="button">パスワードをリセットする</a>
        </p>
    
        <div class="footer">
            &copy; 2025 Trial. All rights reserved.
        </div>
    </div>
</body>
</html>
`;



module.exports = {
    resetPasswordEmailTemplate,
    registerEmailTemplate,
};

