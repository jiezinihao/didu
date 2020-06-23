<template>
  <div class="container">
    <div class="center">
      <div class="product">
        <span class="p-title">产品中心</span>
        <router-link to="/home">冰箱</router-link>
        <router-link to="/wash">洗衣机</router-link>
        <router-link to="/kitchenElectrical">厨房电器</router-link>
        <router-link to="lifeElectrical">生活电器</router-link>
      </div>
      <div class="product">
        <span class="p-title">关于帝度</span>
        <router-link to="/about">品牌故事</router-link>
        <router-link to="/about#ab1">发展历程</router-link>
      </div>
      <div class="product">
        <img
          src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RTc3NzRDNjlGMTcxMUVBOEE1QUNEMzY0NkEwODVCNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RTc3NzRDNzlGMTcxMUVBOEE1QUNEMzY0NkEwODVCNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVFNzc3NEM0OUYxNzExRUE4QTVBQ0QzNjQ2QTA4NUI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVFNzc3NEM1OUYxNzExRUE4QTVBQ0QzNjQ2QTA4NUI1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAbgBuAwERAAIRAQMRAf/EAHAAAAMBAQEBAQAAAAAAAAAAAAAICQcGBQQKAQEAAAAAAAAAAAAAAAAAAAAAEAAABgICAgEDAwMDBAMAAAABAgMEBQYHCAAREhMhMRQJQSIVUTIWYUIjcSQlF4GhUhEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Av5wDgHAOAcA4BwDgHAOAcA4BwDgHA/OTBQSFvQ2xzLmbbXMeMKhjDMUvVmjSsSr1w3TbuHhgbFK3AyhigBlPAAKAFKUA4Hu4rpeDc5zU3U8U7+7Cz1qiYCQnwj3Tx8zTFuwKXzEVFikL/coUOu+x4HoUHMDCH0Cw1k7LWdL7A2eAyHPSFUds3j94rY5OLM5WZw0suUVFfslfUBTgYwAAcDj6SOR9ib5Xcq7AZ0yFr7AbRSbVjr5XMdzjxePdvW5wYPUDoe1b7MhTlSMAnAoCY5h/TgcHLXTa3F9H3toFItc9kLHWOLIyhbFlmx2Z2SyQabR6ZNueOAHRRAzkS+KvrDrrgaNrhhr8oGPLTUMyMiu8owrqJO7javar0o4jXSEqzEEVVm5n3yYhVQOXsPgwBwGGzdrJX9a6cjlzJm62dWDBOSQTQj05Vw+bnklQO4SaqJoeQ+oxkhKI/Tr9eB0OmWZ4TcafzDZH+VbXVMt3+hu4ey4thlXZICrNQVJHtpeFUc+ZSuzF9aoiBvg5zcBp8aa55F1mpuVZnH2VbjsLfJuLR/xGsZHlxWYketBUEhCKicopAr7Ojj5B/aHAT7aNnl7K+xeleKbXf7Pg6YyZT5RXI0bQZldBJrJt0xcKESMRX1qgQ5BIBzeX7fpwFTnZbVSuWCZrEt+RDYxCYgZFxFySBVJI5SOWqxkFSgYE+hADlEOw4DcawVW04i3/AJ/ER82X7K1ODEhLG0G4Srh3/wBw+dNRKb0GOKYCQvwUfEDB2IcCy3AOB+eamYqnM54M37xTU5uvxFqsGwz11HhYJArBuZJk+IssIn8VDf2l+P2dCPx3wPX0n0nydrPk645EyLcsfuIFzQJ6FSShp8rpyLl2CJ0/+NRFEPHpI3Y+X9OB3Wn1ayJctCcU0+jpUo8Ra73YYbI57eYSLpwD9y4bvDwp+hKV+BFB9QmAQAf0HgPrHYssuE4nAWLMCrVGWxhi6UX/APaL2+OCup5hEOFyuPbHqtyJJprj7FR7OQofBP8AXgR5r2oM/s9uzsKMtYhg8Mp5Hki3Rq2lTR0jKt3H3irRWLTOgug6AiiRRMYQEAKPx9eB2msGdb5kH8gdFhbgu3iaLg+Ms2PK86aA4aMjsohq9QZGkTqLHQUcmKAdm6KAj14lD44HpaeacYlzjiWWynmm4ZAC0VW1y75OrJTBCJGYQ5k3CCwMHrZZQ3kAmDy8gAfoAhwPotm4mlRZDPOVsdwWVInIWeMfvaFHphDtG0EVcWQN2v2hW6xTpqexIgnMVQ4/3CBe+B9OlGVaji3VzY7IuOpG6SewGPKW2k8ix17EzmBQfJKOzNCx6AKJq+Il79gGMBh+PnrgafKZGksjbSfjDylcVY+NlrnjiSnZ9RD/ALVkm4ex5lVATBZQwkJ5G6KAnEf07HgJRkT8Y2e7Rk29W+Mu+Lgi7FZ5OYjyrWYSKg3dvVXCYHKDUwAbxOHYdj88ClGO1G5/ymTxGz1rIEbYFj26jlmsRdIVEXDUhwA5BEPgQ4FYuAcCeVn/ABd6iW6y2K2zVUnVZq0ybuXmFkp58kQ7p6sddYwEKoAFATnEQAPpwE52A1T/AB0YHxYnlktPsuUK+eyoVRRvTrYd8oSQXTVOKZzfdgmBievoxPLyATF+OBz+Q6rjKzal4zb4PnGGtMrgq5SOSGGMMtyZEbIorHJOF0ykZKqKqn+6VApkSnKBTh/14HIY/wAx0TIWrm3GSrlXJilZzyvjpwW2XyfWTjYK3vG4OkWyVbbKKlIodBMhCqFRJ35dd/I8Df52Gr0Bpbq/m2qLEV2exXjWNVwNAprfcu3yz8GbeR9MIAiZ+JW5ziPSZvD+/wCOuArOulrx6Giu0tq2Vqk7aa7JZeaOrrXYFQIuSNJOlWR+i+R0PUBHIgJidh0AddcBjXmN9htib1N7g4AMjgxt/hC9AWomSYdyM2u0Zoiouqk1I3cJmK4KcpUjgbyEQEOB4v499frFkGg46rWd5+I/xrD8qtcsc4ZKK0VcYGdQlTHTkJZsJEljNlgMYyYKdgYDkEPjgd5m7E9kyVfdra7hIgYFQsKCTPZDJOTkVi12ysFWwEaKQToxFk0CtigoCpw8evIv9OB485jvUO+zumurmTzjmS/RlE/xqKu9AsaZoVkMU3A7gHP27gqoe0UREnafYh/9BhVyxF+OrH9BvV1uOGMj1qSpdvNVW1AlbEdjOzCIKkSCYjWbl4mdZkYxhAFQDr9pv/yPAe/W7BWu+CdnHlbxThnIEFYHVBCTPlCTcuXlbUaPlGyho8q6qhii5AwFHrr48TdcCnHAOAmGJ8owdFhs4WzLG1VYyPVYe9umaUqINY9tUyKqetGCdKpmEDKpmEC9m/cI8DEtaq9rHs9rZeE4DDrKgY8h8kTEmjHLSbh83Gej2aHhPgsU6RuhTWL0mI+IAXgYljfSysZTe5D2YzNlCF3tbOqs7aVllBtlI47qSh+jIoILsHIJmUEqQtwASj+44CP04HG5BwTBTGvU4OTIhOqObZXpNvpfqbMEWQnKlPfuK5aMVQUTWkFni3qVAqhB68ih1wPRcYhVvWJtashV3ZSC17yDpjTEq9k1aVZkduq5KSiKLQ7eQTUVIVup+xRISKFHsTfHzwE+z7qhuPj6Af41xxYZ/YjFecjpZAucpWK/0wdSq7gF01VFQ9xvM/rTWDwOUvQh8cDfNSPyU5ysdeWw1KYxtWdMtrLvVQt0as2TXj2B/U3Iodmkz6ErQ5vIwmH576EeBq9doGY53P8Af8K1HMJKntZSINlMZX2m/iknH+VQTwrYWER/EGH1NvtCqoB7Cj2f1fP14HAzudtlsH3jImu+01Ate29RyysjWccKpNkq+3m/BMFHhWIN25lFfP3EKIFU7AS9/rwMlssth7D20+qdu1nwYo5vTKFll8m6/wBdkl3k5Hzhm6iSkY+FYFzJOGgHUA5fAP7DfHA6rN2FM8/kL2TpUvZMK23WauwlPPFurJZ2Ksg0BVg5dPSAJyEaAT2i48CgI/UO/wBeuBUbEuR4S97COAou2NWyBRo2lpsC4KiCtVnSD9kZBJeWFyQ5lfEB7KJeug8w4DwcA4EVrBLYQqmZ7MbahrC610d1Ly7hPACrQZaEyQgddYjS3yJWSShE1wV+SlUIJ+yB88BRdGtvMp05hfNd8Da6Mc3FkbBPW8iRJcIwAinJmzMxfSuj6/UUpUwDswCPn148BlbPfMj6qUaDyXZqy413redJNbGimBY14T+GoAOymOrcWCjIFAWdAREVvWCZBETCHl9OApu8WwdGc4z1dhcP7LyOaMkYglpt9J5OFJ6xlwVcmRVauTHXIUQMToSFEpzD0UO+B4ZMQMLZp7nLO9P2/s1wsDmNhJvYHGP2S6TdzMyDlMCN5F0qsX7gyZzqGKcCm7Ev6d8B3cDZm2S1G0cvGXM4V2XuMpHz8ETHUDZpcokNASCLNsh9uqiLkySZPMTAQSgP+gcDztcZ3Am4NSGJw4vCaX7KqSTx45Ux8zUWmFq+1AvuKZ36mRBScHWKY5QU77IUeuB3lg1d2QRdZCqdWsdpiblSa6vNRG3DFdElkyQ69Hta1d8mLsp0UW6hypEOdUxQBEo9BwEA2Ilt6JdnqNj2/Yynqfl+rysk0xrkVWfbuZmwyzlRAwm9pVvFBREBTKAmU+gh88D5EAn6DKmxXidupmrdvLplJO63sx/4+14+tLIPOZi2z9QRTcmMBVyqrFXKUQ8vr2HAbm77g5nMWoazbMkk9L5N7XmUqOcWsspNSzskcBkAE7dkQQH+QWQOU/avwPfff6hs+nGQopDaGZxFL6eU/X2+N6O4nzWyJcoLyT6PUctSpif0IgHg58wUMAqdgIB2HAr9wDgTH/LLXq+51EuljcwUe4sMe/g20fPKtUjvUETySQnTScGKKhCm7HsCiAD2P9eBJOqbo43zGixx3mSIjNYKlEMUnTbKmIotdrZHT1kQiCTFws3KocW65FDqKB49eZE+BQHCGDWG0Nfolea2ydyBqli6xluuO8t2FwVayzlkaOSpvIeTZPimMDIgHVKAiiXsAL0YQEeBr0HDY92KzDuLqvM4jpFNrmPouMjYS7V2FaIzYBONTHUW9qiRiFUT/wBgkKHXAwai6fwutGAN4afnqYlangG2S8GNcvMeo2kpheHYvRKk4O1aEW8DnUURKYpkwHoxvgOu+BoWjjWMxqV3rPnd86usnmJ+tdcFQtk7n0HtMaNAOycLCcFm7Q4Ebif0n8DFN9Ch8cBhoW+wV4xuxyxoliWlWaaC1f41OuZOLTrR0mCIgMkYhzEaqGEgin0HfRvnoDCHXAwbYLFeF8q7A5vGU2dy5j+24yqDW3ZAptYcOm8VHw7NggYV2vikYihzpmKcxExEwmEfjvvgTud7fYd1neRc5rzeZraecmFhPKL5hZvVjVwzPozZeHVWIgZNRcVDgoJB/wBhOBi+UquhFQFv2ezDaJrFWe88qBkPAEBUVvbHv46YUIq6UWdoCoq08CuDABFFSH6+Oh+eA+WzeA4HFv45kbM8scxke23WWp9iG4W06b+VjyyRGhlY9m7OUVU2xTeRgJ5ddmMI/XgVhp+TcLLZkZYobtGwZ1Z0RjNSDwIkxXAwpiokKUZP1dGL5GL/AMfs/wDj44DK8A4EvN/7LBvYlOOypYYl/qWg1QJlWGrbxE91/nk3w/x4MUxP4giRQEvaA/PXnwJWbk5g1az83ouQsLQF3YZSgXlfqkTLT7FFpWv45gdc5SOTJmOUVxOqQTCJvkvfx0HAotNblLVDHk1rhn5NoOcsiR76sQ9qojMpaUDixoHbRf8A5IViFIKfuKK5ih+zoR6+OAqWJq9liEqGUa9kBFtJ23QGETtWC5yrFXVYS8w8FR6Yr9yUv/lEymImXwL4+P7i/wBeAnWMXe0VutuYt2qynDuLDiSeCWutWkUHKiZ31g9zXwbw4AfzKT2GHxMcPDoB/wBvAoq8xrj7DuTMW2LC0hKRO6eV6gF4gHt5dlCkNkpZFRSbRclMCaiHSYuCoJh34n9YDwFUyxr3gXFG0LihLhkWwYomKUg8YSNQdnkhC3yChiF9rpEgJ+goh2cAATB8cDQsaX7d/WJTI2tEHL4mTXwPV3Nvsb2fEy67xi/D+SOgg7UMkZyr0v0VMSh0HRe/pwNTzTlTVPMGuGruQ9w05pS22ZlMOm7TGBGjYiK/vImqDxuZQxkwFMifgAj9fLgL5bte9hMe6vZhseJEa3MapZf/AI6zVxlLCrJXJOCXXRNEpkAiPikuCZ0/cUgiAD5/PXAWTTWL2Tic1xa+N20ZB2RKHkUmrvJSThGAI3MiBVCGFcoE9gl+Ew4FX/x74ox1hnP05TrnLvrBtQvV5KWmpWCkCSVR/wAdePGxkk01egODgpwL+0Q+A764FsuAcCMWRNd/x2Pc5uoiwY+eyyFrcSsvkHMrS0uSVWCmjrrqKx0q7K/Kk0dLKgPgiPiPZigAfPASjZikyMJrc1eYup01irVJHJzFjIYSs6C6lklrH61BPNMXy5VVBZuWnrTSKVfxE5TGAv68Dr79l/WKcwnKazRmmOaopHG7WTuMFAOgde+EfvGqxU5aQD7oV/tymX8hFUBJ1+nAohonPvrXoTTaRiHIdejswRFYkEmIrrIPzQj1zIPBaKyDIvuOQo/UAOn8h+g8BW5djtbjmAzjeNfI2VqGTqlItz7HScjX1ZMuS7Eqt6E5SpNV2i5SNkxOucxUypl8TlHx+OA3Mth7UHck+MJDM05BXnNrKos2MnX42zCykUnCaP3T9FSMYOkzEOksZQTlFPsnyA9AHA5zHFbt0dqTLttNK5K6qva/bJORfQ+UGS750u1atxM7Okm8K8MBXAgn6zddftMHxwEpi67iTNmvWPttdjcCXzZHMWUJmQg7G7x8DtBRNCHVcNGaqrGOVboJEIg2In5FJ+43yPyPAySP09xLuHLTVV1cxzM602jExyDk2Nyc6kFnDoJIP+yTRbgo7URMl6VDH8wL2By9d8D6sP5+3ohc5w2jNKzRWoZbHz13RoWXcwTJdgmlXUFSFH2HZHcHKJG3RRMHkPx5cCuEXN4z3AxxMYI2GrUhEW2vyINJWpTa4wEhY3EAmmZWwQ7ZFVJwdgsv5iQ5S+PwYoh8cBCPxHa02GFttl2RQnYv/C3qVgpTSsh7zSSa7d82MVUxhJ6vDxSEP7hN8hwL48A4EetHcYUHL8TvFRckVlrbak+z7NOHUG6MoVI6rdb2JG7SOQwCU5QEOh4C35SWzpuXsc21ysaszqdQqLTU7hCU2ZbkkUlD1x6q2bSqf7WxylOmqIFHzEoeofr3wN9quIoDPtclYHFG7kFcNj5Ni7a5fy9EsU3UhM01YPtU4pdmVcEk0UzqJB7Ch5CIB8/PAQOfuI6qZarWqmKLgjgS1V6XQhM3bMI+KiM+0dETdtHLqPcgqCBWQOTF6Kp8/IiPArHkDcez4EhNZ6DWay926uGXay4dxdyg3KbJWbUjk0jqOkW6aC4GBYhzKftEOgKPASbXWia04T2YJsdbNvqWyn3DmdfWLFbtIG7yLfTiTgjhgs4Fc3SjNVcxDj6/kSCHQd8DL5zefJmEs0TVSWz2ruZj221VdhGJRJmsc2SlJgxkUiAZJBYTHbgHXQG+fMPp1wMg1ovO8OHckVXCQPbbScf4sk4+xZWp6zNAqMJWXT1J5JPnwnRMdNuKKp1Dm8vgBEQ4FA4jZ/X7AG1dwyHXcw1nK0DthYY9C0vGL0rVGktYpIqRXTxUQVBcioKj0H7OvD/XgMFFXr8XMLlFbNEVeMassoOZN3MrXAkqr9wZ+/8AZ9yv4mVFPyU9p+/29fPAVHA2ysLYn2VsuKQxNntoq3fZ2t4XrTF4CE5/gCnRinYppJeJ2qYLLH8hTE37h/cHA0v8S9KyirR5HJLzKLpPGD2YscelhI7JP1s5UXaKh3ove/MTAAGL49dfPAsvwDgRaxzs9sOvcM7RusuktOk4KuZEmYm4z0VKJRZ5GWbLnIZ08Ib0iosqTxOY3Q/X68D35PKe7f8Akz3Jkp+O2nKW9KCWhntwVm2Z3/8ADh5KqMxX9gqCiIiIiTvrv9OBwOObxrs+wHiPZR46iNGH8pe3DCUWxzHqFGxNYhc5zwz5VoiRQzdf0+ZymAS9lD68BaNjNhdRKllu6ZuosLUtuZnNLtEZ+pXGJWRbVckY2TRRUYqrtu1BddiB+w7DwDgV3rGLabsxrNhu2w0Iwwlc3NOjnON7hUmyIyFMSdgiquhCODFTMiRRIgom8BL2Qw8BC9RdQcgVPKVpo+wep1ayVQ7JZZuUWz3bxjpGXKkVJQWn/CKi5hB0qmUxgD6GUMI/TgbTnPBkhUckI1vCH478ZXKkrs2Z08mlSjGDxk7XMYqyiKQgQxTtvg5R/r+vATFfVTKs7tVtjiiF2NyFP3OvYpQfnsSjgCSNsB0ya+mFkFVHAFFucVSpB5G66AO+uuBjGbLbg3BOt9LwK8wTRJjZc8JJweZJl7HgWdrUgcwKMnab5NExF1RTWAwCVYeugD/TgUdwHgClSdI06RS00x5fKXfcdxkllnLckxYffsHx2BVE1DJKkFRwZc3RjG+e/LvgSk1qlsj443ovquCMVsr9ZISWuUdE0EzgI1sjHg5XQU8DeRAKVBLoCkD/AKBwKsfj8zXR6/lOZ1MxPOIZGx+yhpK/OckrlVZvgmHbpuR5G/aGTKQU0TKfBwH54FiuAcD82EvOz9c1V/IdK1mZkYCZR2NUK2kopys0dFA8kQDAVVAxDgAlEQEO/kPrwOE/GNkTJtpz1doy33q0WKKLi+zLFj5iTeu24Kl+1Ap/W4VOTyABHoeu+BR/8dNXa2j8f0ekFNrt4sEbI253TYaztUXUeaWIu4BoCvuKYEymUECnMXoQKI/PAUfYPOezGsUfWJPLGo2uLBnb1XSMKpHQiT/zMzKmZbzBF2PiAAqXoR+vAV+mZ/2uumCdurhTG8NFY1kX8Q8uirSSeMF6qRR0Y7VtWGpXpft0RMPiYhCmDx+OAzVD2zzJnrXl89zo5b421formMrV2yxQXT1C8IyDVNAY70Aq5dCr9yuKJXBvV8lMcfjgKRvFlrbWMzW2aZLn18dWAavGKM6/RZ2QLHHj/wDlBu6UKR2oHuUAB9g/H0D44Gw6d2RNzTblcaNdbFaswztZkWW2EjYnSvnA4+TXOVaTrjwTEXWkkW5EjJFMop+74AnwHAxrddCfcUDCstDQ8bLYRkBlFMTZbelIa7WVuHoBwtZlewUMokp2RLzIUPH6cBlkNYZ2k4g1zzjJ5yyhA67SNBYTmanUXZjkewzh63TKzbwcamUBFEFlSEEPE/iT57+OB6WQ4/Ams1pqGFV7TbmGIM0VttlZ3nxo29mRm7+SFRNBg3ftkEzEaOSNkzLJnSEwmOfswd8B0tTcqZSb7VS2C8nYTxVjyQaY/NaGlgpMcVOScNFnDYjYF3aaxymBUpxMoXxAfIAHgVq4BwI1VXWH8gGIbTmo2IrDiMtOyrfJa4nZ2JNy9X7ermMiBu2nRfFPx7L2IAbvoeB2amPPymmbPWydgwK0K/bKtHCjeOXSOKSxRIcAMVoA/IDwGG1B1mseHdVVMA5Tesnb6VNYG006rzpbw+zmzqgPpXOmkcigEVHoQL+0fpwMRdatbMtHKWAYaYo7rTDzGFVj5Qy7i5Frz/8AdJFI/O3MAORMor6zgP7Q8f6cBQYH8PlrbZ5eGlpmPDWZ1NvDKV9pOOyTqkT61fsSqG+zBMypFBTE3Y/QB6HgUlhvx667QWFbhgJg1sQY+vM00n51BSVMd2LxkKQpCkv6/wBhf+EvYePzwPAsGq12ktvLDm9utArUJ9iFWhRbB4ooq/LI9D6lTpGQMmCYfqYD9/6cBa8EfiGxVFY4jEM5LyznJyxnidjeVSecIxqzc65xbEKUyCYj0j4gcBDry74GcS/46NnMfPM50TX6doiOEssMyQ7SPuDp1ISzWOKiYpgRVFmYqCgnVUHyJ3/t/UoDwPY2V/HRsFlvG2sFLqdkq7JfEGO21UuSTyReIt3L5AEv3IAm2OCiYeA9GMUo/wCnAonU8eZwgrphmEfjSn+FaljhhB3doq2FeaPYmTYUQOzWUR6+27KQQ7EB/u/b88DnovXu8Mt6rFsid3Ef+v5XHCNSasSrK/yQPU10VBMKPqBME+kx+fPv6fHAdPgHAOAcA4BwDgHAOAcA4BwDgHAOB//Z"
          alt=""
        />
        <span style="width:110px">扫码关注官方微信</span>
        <span class="induce" style="width:110px"> 在线报修报装</span>
      </div>
    </div>
    <div class="other">
      <div class="left">
        <a href="http://www.whirlpool.com.cn/about/contact.htm" target="_blank"
          >联系我们</a
        >
        <div>|</div>
        <a href="http://www.whirlpool.com.cn/privacy.htm" target="_blank"
          >隐私政策</a
        >
        <div>|</div>
        <a href="http://www.whirlpool.com.cn/terms.htm" target="_blank"
          >使用条款</a
        >
      </div>

      <div class="right">
        <span>Copyright ©2020 惠而浦(中国)股份有限公司 版权所有</span>
        <a href="http://beian.miit.gov.cn/" target="_blank">
          皖ICP备05011068号-3
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 865px) {
  .other {
    flex-direction: column;
  }
}
.container {
  width: 100%;
  // text-align: center;
  // margin-bottom: 20px;
  .center {
    height: 178px;
    // overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0 0 0;
    border: 1px solid #afafaf;
    // margin-left: 400px;
    // align-items: center;
    .product {
      display: flex;
      flex-direction: column;
      margin: 0 60px;
      text-align: left;
      flex-wrap: wrap;
      // flex-direction: row;
      text-align: center;
      &:last-child {
        margin-right: 200px;
      }
      .p-title {
        margin-bottom: 12px;
        font-size: 12px;
        text-align: left;
      }
      img {
        height: 110px;
        width: 110px;
      }

      span {
        display: inline-block;
        // overflow: hidden;
        width: 48px;
        height: 18px;
        font-size: 12px;
        text-align: center;
      }
      .induce {
        margin-top: 3px;
      }
      a {
        text-align: left;
        display: inline-block;
        // overflow: hidden;
        width: 48px;
        // overflow: hidden;
        height: 18px;
        color: #949494;
        text-decoration: none;
        color: #949494;
        font-size: 12px;
        padding: 1px 0;
      }
    }
  }
  .other {
    padding: 11px 0 16px;
    margin: 0 auto;
    width: 970px;
    text-align: left;
    line-height: 1.2;
    overflow: hidden;
    // height: 13px;
    //    @media screen and (max-width: 1000px){
    //   justify-content: space-between;
    //   .right{
    //     margin-left:0 !important;
    //   }
    // }
    .left {
      // display: inline-block;
      //
      // margin-left: 268px;
      padding-left: 2px;
      float: left;
      width: 410px;
      font-size: 11px;
      color: #cdcdcd;
      a {
        // display: inline-block;
        // box-sizing: border-box;
        height: 14px;
        text-decoration: none;
        color: #484848;
        padding: 0 8.5px;
        line-height: 1.5;
        font-size: 11px;
        // position: relative;
        // border-left:2px solid 10px rgba(149, 165, 166,.6);
        // &:last-child::after{
        //   width: 0;
        // }
      }
      div {
        display: inline-block;
        font-size: 12px;
        color: gray;
        opacity: 0.7;
        font-weight: 300;
      }
      &::after {
        height: 0;
        visibility: hidden;
        content: ".";
        display: block;
        clear: both;
      }
    }
    .right {
      font-family: microsoft yahei;
      float: right;
      width: 510px;
      color: #484848;
      font-size: 11px;
      text-align: right;
      a {
        // overflow: hidden;
        width: 120px;
        height: 15px;
        font-size: 10px;
        text-decoration: none;
        color: #737373;
        line-height: 1.5;
        padding-top: 1px;
      }
      span {
        line-height: 1.5;
        width: 271px;
        height: 15px;
        // overflow: hidden;
      }
    }
  }
}
</style>
