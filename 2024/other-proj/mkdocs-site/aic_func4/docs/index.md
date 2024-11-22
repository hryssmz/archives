# 操作一覧

---

## 1. 音声認識サーバーの登録

---

1. 音声認識サーバーの追加
2. 音声認識サーバーのリフレッシュ
3. 音声認識サーバーの削除

**音声認識サーバー URL**:

- [http://192.168.11.14:30080](http://192.168.11.14:30080)
- [http://192.168.11.14:30081](http://192.168.11.14:30081)
- [http://192.168.11.10:30080](http://192.168.11.10:30080)

**音声認識サーバー登録情報**:

| IP            | Port  | 辞書フォルダ        |
| ------------- | ----- | ------------------- |
| 192.168.11.14 | 30080 | /home/pku/aic/dic_a |
| 192.168.11.14 | 30081 | /home/pku/aic/dic_b |
| 192.168.11.10 | 30080 | /home/pku/aic/dic   |

## 2. 音声辞書の更新

---

1. 辞書ファイルの追加
2. 辞書ファイルの削除
3. 立ち上がりエラーがある場合
4. リフレッシュ前に他のユーザーが AmiVoice を使用した場合

```bash
# AmiVoice コンテナ内のファイルを確認する
docker container exec -i aic_amivoice_a_1 cat /opt/AmiNets/server/ini/AmiNets34102.ini
docker container exec -i aic_amivoice_a_1 cat /opt/AmiNets/server/ini/AmiNets34103.ini
docker container exec -i aic_amivoice_a_1 cat /opt/AmiNets/server/res/20190304/systems/AmiBiLstmNaturalSpeech16k_VoXT_General_Lstm/profiles/ines.rcd
```
