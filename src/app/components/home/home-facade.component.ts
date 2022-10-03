let username = '';
        // window.onload = function () {
        //     recoverUser();
        // }

        const recoverUser = ()=>{
            if (document.cookie) {
                username = document.cookie.split(';')[0].split('=')[1];
            } else {
                username = createUser();
            }
        }

        const createUser = ()=>{
            let user = 'guest-' + new Date().getTime();

            let date = new Date();
            date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
            let expires = "; expires=" + date.toUTCString();

            document.cookie = 'user=' + user + expires;
            return user;
        }

        export const doAction = (id:any)=>{

            recoverUser();

            let params = id + '/' + username;
            window.location.href = 'https://external-launcher.pow-gaming.com/user-management-tool-assignment/1/' + params;
        }
