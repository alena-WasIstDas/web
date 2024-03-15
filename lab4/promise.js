function delay(N) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, N * 1000);
    });
}

delay(3).then(function() {
    console.log('Прошло 3 секунды');
}).catch(function(err) {
    console.error('Ошибка:', err);
});

function delay(N) {
    return new Promise(function(resolve) {
        setTimeout(resolve, 1000 * N);
    });
}

function counterWithDelay(N) {
    return delay(N)
        .then(function() {
            console.log(N);
            if (N > 0) {
                return counterWithDelay(N - 1);
            }
        });
}
counterWithDelay(8);

async function getFirstRepo(username) {
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userResponse.json();

    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const reposData = await repoResponse.json();

    if (reposData.length > 0) {
        return reposData[0].name;
    } else {
        return "У пользователя нет репозиториев.";
    }
}
getFirstRepo("miroash")
    .then(function(repoName) {
        console.log("Первый репозиторий пользователя:", repoName);
    });