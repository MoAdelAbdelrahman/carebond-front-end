[1mdiff --git a/src/views/SeniorForm.vue b/src/views/SeniorForm.vue[m
[1mindex 3d2544e..49ec53a 100644[m
[1m--- a/src/views/SeniorForm.vue[m
[1m+++ b/src/views/SeniorForm.vue[m
[36m@@ -349,16 +349,21 @@[m [mexport default {[m
                 UserType: "Senior",[m
             }[m
 [m
[31m-            const response = await axios.post('https://api.carebond.online/senior/r', [m
[31m-            registerBody, {[m
[31m-                headers: {[m
[31m-                    'Content-Type': 'application/json',[m
[31m-                    'Authorization': 'Bearer' + ' ',[m
[31m-                }[m
[31m-            });[m
[31m-[m
[31m-            console.log('here');[m
[31m-            console.log(response);[m
[32m+[m[41m            [m
[32m+[m[32m    try {[m
[32m+[m[32m        const response = await axios.post('https://api.carebond.online/api/senior/r', registerBody, {[m
[32m+[m[32m            headers: {[m
[32m+[m[32m                'Access-Control-Allow-Origin': '*',[m
[32m+[m[32m                'Content-Type': 'application/json',[m
[32m+[m[32m            }[m
[32m+[m[32m        });[m
[32m+[m
[32m+[m[32m        console.log('Registration successful', response.data);[m
[32m+[m[41m        [m
[32m+[m[32m    } catch (error) {[m
[32m+[m[32m        console.error('Registration failed', error);[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
             [m
         },[m
         onChange(image) {[m
