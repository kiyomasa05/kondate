'use strict';

const btn01 = document.getElementById('btn01');
const btn02 = document.getElementById('btn02');
const btn03 = document.getElementById('btn03');

btn01.addEventListener('click', () => {
    // ここに簡単な献立を追加する
    const results01 = [
        '親子丼',
        'カレー',
        '鍋',
        '餃子',
        'お好み焼き',
        'もんじゃ焼き',
        'たこ焼き',
        '焼きそば',
        '鳥の照り焼き',
        'オムライス',
        '鮭のホイル焼き',
        '三食丼',
        '生姜焼き'];  
    const n1 = Math.floor(Math.random() * results01.length);
    btn01.textContent = results01[Math.floor(Math.random() * results01.length)];
})
btn02.addEventListener('click', () => {
    // ここに難しい献立を追加する
    const results02 = [
        'ハンバーグ',
        'ロールキャベツ',
        '餃子',
        'エビチリ',
        '鳥の照り焼き',
        'トマトチキンパスタ',
        'カルボナーラ',
        '唐揚げ',
        'たらのホイルマヨ',
        'チキン南蛮',
        '鳥の竜田揚げ',
        '焼き鳥',
        '春巻き',
        'ちらし寿司']; 
    const n2 = Math.floor(Math.random() * results02.length);
    btn02.textContent = results02[Math.floor(Math.random() * results02.length)];
})
btn03.addEventListener('click', () => {
    // ここに難しい献立を追加する
    const results03 = [
        '味噌汁',
        'たまごスープ',
        'ポテト',
        'コンソメスープ',
        'コンポタ']; 
    const n3 = Math.floor(Math.random() * results03.length);
    btn03.textContent = results03[Math.floor(Math.random() * results03.length)];
})
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    btn01.textContent = '?';
    btn02.textContent = '?';
    btn03.textContent = '?';
})


