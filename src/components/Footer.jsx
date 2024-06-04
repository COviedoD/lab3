import React from 'react';

function Footer() {
    return (
        <footer>
            <p>© {new Date().getFullYear()} Athena Gift Shop - Todos los derechos reservados</p>
            <div className="social-icons">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAABDpJREFUWEftl2nIVVUUhh8bKWm0ifJHkYGVgVlURNJIUUSZoAYFkTSADUQ0kA1kUTQSNBKNBIVWWlnajDRRFI02UCQRmRnNk0VhtR9Y52N3vWfYN398P1xwufecu9Y+71l7rXe9ewTD1EYMU1ysAVa6M6sjY2sBW8VnI+A74Gvgh1Iwuf+gwARzCHAScBSwfh8QAnwWeAJ4CPizBGgpsLWB44GLgR0LHrQEmA682DWmBNguwFxgbLb4b8DDwLvAMuB7YFtgO+AwYCL8p8HuAE7vkr2uwI5IgGYD1pD2EXAZMK/lIYI8DTgL2DBi3wCOBr5qyl4XYNbQo/Hmf6UFTwXu6bol4bcZcDcwKa4/A/ZoapA2YAa/BGwQi5i51wpB5e5m2frUXk41dxDgy65iTcDWBT4Bto/g/VPdvPo/QFWhVwHnx8UlwOWlwM4AboygGcBt2QI7RHfaZS8UgjUZUojZXxHdvbx3jbqMSQsW55bRcbsD/0TwnsArwHrAh4mjdi0EpvuY2A2ffydwcldghwJPh/ORwIIs0N++bWVucWd+yuLuCm5bCWwc2Rv6uy5jNwXf/AhskQrW4Mpk9M2z68eybitJ3n7RWMbIec/kwXXA3ktkuhtwf9RSHrM0CLS691a0fgkofW2un6Ljz0kceX0XYN9EpmYl50t7nij7T457fyTmHwc4cgaxKgE3AGe3AVsn4xbHxy09TzwcWBj3JEpnZtUYpeAWAQcAc4Bj24CNBH4Np1PStjnfei3P2kVpW64oRRT+VSM92dNQfRWsdWex+31NRob5s22I9xO3bR03p4a0KcX3JjAhRpzqY8jqiv/LUAkqhyk1T5MmpBS1mFtp5mT1v8P/5tgeeerKVEM/91lHQanI9P8LuwCTAhzeb8cb1WVCWfM4sEk4qDquC7C3ZkE2k6JyfnZPGfVBXB8HPNAFmEUvl5mJnYGPG/bIqWDmnBJNZhO5bmUzozZVtpbGL12AWTuOJLf6waS/prU8VMK9Npi8n+vviUD3TUT8Tvzp9n+axtFo4JGMflprTId7gRPC0/loobaZc/PcNF+PiTGjvzJJFaH+r+y8RKxXN63dJHusn2oGyjFyTVdTBOwVg9oRlluu8Tyk2NGrWBMwpU5FrtbPt11RNfi5dUrrbZLcdg6PBz4vBaacVpsPOgt7n2eTPBX0YFOpYJ6re4m6jDmWPPF4+JCbLghek0IOjnq5D3BWttmmMQcd1Ep07czo+trYOmB2kGJQU464BfJObtaO5CkJKxhVo5VZYwcGOXsOrU5IHve8djcarQ6YqsJOKrEvEokqiTyy+VHW5OZ8ld2bOHHIvw6Yh459wsu5+Xo6vD4fn8VBBycGNzWBd+SYndtjinR+0X7AlLnKEalC7vG7Uhu9Cyt59k6CcqfQ8aPiMCx4ec/vgaztXDnQoqsjaA2w0iwO24z9C9rsxycx/FV/AAAAAElFTkSuQmCC" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAABERJREFUWEftl1nIlVUUhh8ls0GDygZSUIogbCAqGi+yQggymjUoGgmL5qKLigZsIsgcIKmIoqC0okkbKIoGGqFoniGCitCwkka1zP38rE923/mm8x8vvHDBuTjfXnvtd6/hXWuPYAOVERsoLjYC6zcyw/XYeGDXjoetBt4C1nTUH1LrCuxI4ARglwA0oZ9DgL+BL4Fvk52PgdnAr0022oCNBeYBZ/YJpE19KXAq8GKdYhMwQX0A7Byb/wM+jxu/HB5oA+D6lsBUYD9g7/hf7LsYmF9lpAnYPcDZselR4PL0/7suSBp0NkkhvCStXx8Azb/dga/Le+qATQH0inJ7gBoQEwcC/wDvAkdkYXwTOKQrsPuB04A/gR2A3wdEdVkkvGbOBxYAi1JqzAi7u5VTo85jPwA7AY9HNXbBNTEduH3koFWYy8PA9Pjgpc8ArPTn4lsBdt2eKmDmgbFXrgFubEAlfdwRoRiTFck3gDl6K2DRXBd5pcpVwC3AjsCPsec24Ir8nCpgekqPKTOT5+6uAaYH7gO2aABunhaekpT1pFQhh42MnBPDA8DpbcCMt7SgnAwYhrIcCzyRfZTZPwF+CRI+LNHANrH+KbBP8tSqCjsCHZ0q06ovLjCkVuUxueb9MHJMMrq4ZNBiEPjWcfOzSiBVHwfcBRwfe29O6XF1A7DH0sVObPPY/sA7oWSCPl8yaN7Nim/TgGdqQmmuvg3sGyGUsKWLXAqPdQJ2cGLqN2K3jF1uG/6Xh14BDFmTHA68FAraNeRVwHqqvyqUB8RNNVD2mF74DdgMmAPIT01iOyo4sKjGXF9bVvNTqf2Zt+ukCthewIehcVzqb09m+lbW9/H/WuCGFmBWniRtgksf55T0lyW62Q54FjiqH2COOro5l+VRcV3IN7+kPdJJpcrW08DRgwKTm+ylekJqaWrstp7z4sBDgddKwFakXrxVRMXodA5llcc0UHjRipRS/q0IqY359fj+XgqX1V6eYr3c5l15bM/EPx+FQXkoJ9Li/LwBm4+2E4m0INiTovVYLBKrBOt6WQRqnj8Yg2Ojx3Lmt/s/UmFQVn8V2KMl+e2TF0Y/LavmPbmnMKqqUkb/OaxcUGPUZSttLnBuDTgbtG2mCGdZLaeSO7NcHNKrG3tWApt2HBIdAM0nvefYY2gNmxRgaOtkchbeHuqpA+ZUeVC68Wcx+rZEbFjLF2X0IVVIGY055qIsfVNonQI8NKyj6zfZN7+KmczobJsK6I8uwGwTXwAyvfOTvbGqqoaDV9v3JntWbuEEB8f/SdMryclhSWhbXVaODVwq8fHqt65iQTll+Ls03hHu1ZZU0sODbQ9eB0UBWUFtYg/9KYpgVJsy8EI8eIxIj7QBc8MkYCEMPb/Wh0i4V0bF19rrAszN6hkG5zMfqOZe173u/yty1jelL6OCJwcGtj481ZeNfm7dl+FBlTcC69eDawGqr9YnhayJ4AAAAABJRU5ErkJggg==" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAVNJREFUWEftmLFKA0EQhr8QSCd2CaSwShkU0kggYl4iL5DKkMYuYKVNBGtLCx8gDyBWGpt0Kr6ABFIH0ghikRu5Ii6bZDZszoXswRV3N3vz3b//zu5ejkCPXKBcRDDXntmGYnngGCgAX8B04fzRAvoE2wPOgTOgbAF4BppZgwmIJK6sSPwvYC9AY40amYOdJl30pOiizMFuga4FbAw8ApP02Sdwr/iA3xAf5h8CJ0bCd6Cejkoty584H2BvwJGR/Rq42IgobeQD7AOoGhBXyfVlBFuiQBCKHQBtA7ADFI17UhrMEjICHrTd6+oxKaJSTDc5esCNtmGWYK1kkAxCBKsBryGC7QOzbYHZzC/LnNIa838n67O+FsrXlCTTz2GIBTaCuVhBYqNiUbFVCrhOSbZ3RY9Fj+2sx+4svwZk/6jeQ9qU8zEqXT2pio9gKpkWgoJVbA5XL0cnAlhM2AAAAABJRU5ErkJggg=="/>
            </div>
        </footer>
    );
}

export default Footer;
