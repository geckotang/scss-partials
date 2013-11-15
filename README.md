# SCSSの便利?なmixin&function集

scss/以下に各scssファイルが存在します。

## 使い方

### _rem.scss

$root-font-size: 10 !default; を指定しています。必要に応じて上書きすること。

```scss
@import "scss/rem"
.d1 {
	@include rem('font-size', 10);
	@include rem('height', auto);
	@include rem('width', 10rem);
	@include rem('margin', 10px auto 10px);
}
.d2 {
	font-size: rem(10px);
	margin: rem(10);
	padding: rem(1rem);
}
```

```css
.d1 {
  font-size: 10px;
  font-size: 1rem;
  height: auto;
  width: 100px;
  width: 10rem;
  margin: 10px auto 10px;
  margin: 1rem auto 1rem;
}

.d2 {
  font-size: 1rem;
  margin: 1rem;
  padding: 10px;
}

```

## テストを実行する

[bootcamp][1]を使ってテストを書いています。

```sh
$ npm install
$ grunt test
Running "sass:test" (sass) task

Running "bootcamp:test" (bootcamp) task
✔ ✔ ✔ ✔ ✔
5 Tests, 11 assertions, 0 failures, 0 skipped

Done, without errors.
```

## LICENSE

SCSSファイルにライセンス条項が明記されていない限りすべて[パブリック・ドメイン][2]として提供されています。


[1]: http://tctcl.github.io/bootcamp/
[2]: http://unlicense.org/
