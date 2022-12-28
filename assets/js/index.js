const repositories = document.querySelector('.container')

function getApiGithub() {
    fetch('https://api.github.com/users/guilhermevarussa/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status)
            };

            let data = await res.json()

            data.map((item) => {
                let projectCard = document.createElement('div');

                projectCard.innerHTML = `
                
                <div class="project-card">
                <div>
                    <h4 class="tittle">${item.name}</h4>
                    <span class="create-date"> ${Intl.DateTimeFormat('pt-BR').format(new Date(item.updated_at))}</span>
                </div>
                <div>
                    <a href="${item.html_url}" target="_blank">${item.html_url}</a>
                    <span class="language"><span class="css-circle"></span>${item.language}</span>
                </div>
                </div
                
                `;

                repositories.appendChild(projectCard)

            })


        });
};

getApiGithub();



