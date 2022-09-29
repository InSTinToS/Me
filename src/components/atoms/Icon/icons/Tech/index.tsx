import { Icon } from '../..'
import { IIconProps } from '../../types'

export const Tech = ({ ...props }: IIconProps) => (
  <Icon viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M19.9598 20.0369C19.9091 19.9132 19.8807 19.7773 19.8807 19.6353C19.8807 19.4934 19.9091 19.3575 19.9598 19.2338C20.0125 19.1101 20.0876 18.9965 20.1809 18.9032L20.1869 18.8951C20.2397 18.8424 20.3005 18.7917 20.3654 18.7531C20.3999 18.7308 20.4364 18.7105 20.4769 18.6923V17.0252H18.7511C18.6984 17.3903 18.524 17.7188 18.2725 17.9723C17.9581 18.2867 17.5221 18.4814 17.0415 18.4814H16.0011V23.0282H19.0533C19.0695 23.0018 19.0857 22.9755 19.104 22.9491C19.1405 22.8964 19.181 22.8477 19.2257 22.8031C19.321 22.7078 19.4366 22.6287 19.5664 22.5759C19.6901 22.5252 19.826 22.4969 19.9679 22.4969C20.1078 22.4969 20.2458 22.5252 20.3695 22.5759C20.4993 22.6287 20.6128 22.7078 20.7102 22.8031C20.8055 22.8984 20.8846 23.014 20.9373 23.1438C20.988 23.2675 21.0164 23.4034 21.0164 23.5453C21.0164 23.6853 20.988 23.8191 20.9373 23.9469C20.8846 24.0767 20.8055 24.1923 20.7102 24.2876C20.6149 24.3829 20.4993 24.462 20.3695 24.5147C20.2458 24.5654 20.1099 24.5938 19.9679 24.5938C19.83 24.5938 19.6982 24.5675 19.5745 24.5168L19.5664 24.5147C19.4366 24.462 19.323 24.3829 19.2257 24.2876C19.1668 24.2288 19.1141 24.1598 19.0695 24.0889C19.0452 24.0483 19.0229 24.0037 19.0046 23.9611H15.5347C15.4049 23.9611 15.2893 23.9084 15.2041 23.8232C15.1169 23.736 15.0642 23.6204 15.0642 23.4906V18.4814H12.7928V22.6064C12.8272 22.6246 12.8617 22.6429 12.8962 22.6652C12.9591 22.7037 13.0179 22.7524 13.0686 22.8031C13.1659 22.9004 13.243 23.014 13.2957 23.1438C13.3464 23.2675 13.3748 23.4034 13.3748 23.5453C13.3748 23.6832 13.3484 23.8151 13.2977 23.9388L13.2957 23.9469C13.243 24.0767 13.1639 24.1903 13.0686 24.2876C12.9733 24.3829 12.8577 24.462 12.7279 24.5147C12.6042 24.5654 12.4683 24.5938 12.3263 24.5938C12.1864 24.5938 12.0505 24.5654 11.9248 24.5147C11.795 24.462 11.6794 24.3829 11.5841 24.2876C11.4887 24.1923 11.4097 24.0767 11.3569 23.9469C11.3062 23.8232 11.2778 23.6873 11.2778 23.5453C11.2778 23.4074 11.3042 23.2756 11.3549 23.1519L11.3569 23.1438C11.4097 23.014 11.4887 22.9004 11.5841 22.8031C11.6348 22.7524 11.6895 22.7078 11.7504 22.6692L11.7585 22.6632C11.7909 22.6449 11.8254 22.6266 11.8599 22.6084V18.4814H8.83001V20.6189C8.83001 20.7487 8.77728 20.8643 8.69211 20.9495C8.60693 21.0347 8.49133 21.0874 8.36154 21.0874H6.21183C6.19561 21.1198 6.17736 21.1502 6.15708 21.1827C6.12057 21.2375 6.07798 21.2902 6.02931 21.3389L6.0212 21.347C5.92588 21.4423 5.81029 21.5214 5.68049 21.5741C5.55678 21.6248 5.42091 21.6532 5.27894 21.6532C5.14104 21.6532 5.00922 21.6268 4.88551 21.5761L4.87739 21.5741C4.7476 21.5214 4.63403 21.4423 4.53669 21.347C4.44137 21.2516 4.36228 21.1361 4.30955 21.0063C4.25885 20.8825 4.23046 20.7467 4.23046 20.6047C4.23046 20.4648 4.25885 20.3289 4.30955 20.2032C4.36228 20.0734 4.44137 19.9578 4.53669 19.8625C4.63606 19.7692 4.75369 19.6901 4.88348 19.6373C5.00719 19.5866 5.14307 19.5583 5.28503 19.5583C5.42699 19.5583 5.56287 19.5866 5.68658 19.6373C5.81029 19.6901 5.92385 19.7651 6.01714 19.8604L6.02526 19.8665C6.07798 19.9192 6.12868 19.9801 6.16722 20.045C6.1875 20.0795 6.20981 20.116 6.22806 20.1565H7.89509V18.4428C7.56453 18.3698 7.26843 18.2035 7.03927 17.9744C6.73304 17.6681 6.54443 17.2504 6.54443 16.792V15.6786H1.56766V18.7308C1.59403 18.747 1.62039 18.7633 1.64675 18.7815C1.69948 18.818 1.74613 18.8586 1.79277 18.9032C1.88809 18.9985 1.96718 19.1141 2.01991 19.2439C2.07061 19.3676 2.099 19.5035 2.099 19.6455C2.099 19.7854 2.07061 19.9233 2.01991 20.047C1.96718 20.1768 1.88809 20.2904 1.79277 20.3877C1.69746 20.483 1.58186 20.5621 1.45206 20.6149C1.32835 20.6656 1.19248 20.6939 1.05052 20.6939C0.910582 20.6939 0.776733 20.6656 0.648967 20.6149C0.519174 20.5621 0.403577 20.483 0.308259 20.3877C0.212942 20.2924 0.13385 20.1768 0.0811209 20.047C0.0283923 19.9192 0 19.7834 0 19.6414C0 19.5035 0.0263643 19.3717 0.0770649 19.248L0.0790929 19.2399C0.131821 19.1101 0.210914 18.9965 0.306231 18.8991C0.365044 18.8403 0.433997 18.7876 0.504978 18.743C0.54351 18.7186 0.590155 18.6963 0.632743 18.6781V15.2102C0.632743 15.0804 0.685472 14.9648 0.770649 14.8796C0.857854 14.7924 0.973451 14.7397 1.10324 14.7397H6.54443V12.4683H1.98949C1.97124 12.5028 1.95299 12.5372 1.93068 12.5717C1.89215 12.6346 1.84347 12.6934 1.79277 12.7441C1.69543 12.8414 1.58186 12.9185 1.45206 12.9712C1.32835 13.0219 1.19248 13.0503 1.05052 13.0503C0.91261 13.0503 0.780789 13.024 0.657079 12.9733L0.648967 12.9712C0.519174 12.9185 0.405605 12.8394 0.308259 12.7441C0.212942 12.6488 0.13385 12.5332 0.0811209 12.4034C0.0304203 12.2797 0.00202802 12.1438 0.00202802 12.0018C0.00202802 11.8619 0.0304203 11.726 0.0811209 11.6003C0.13385 11.4705 0.212942 11.3549 0.308259 11.2596C0.403577 11.1643 0.519174 11.0852 0.648967 11.0324C0.774705 10.9797 0.908554 10.9513 1.05254 10.9513C1.19045 10.9513 1.32227 10.9777 1.44598 11.0284L1.45409 11.0304C1.58389 11.0831 1.69746 11.1622 1.7948 11.2576C1.8455 11.3083 1.89012 11.363 1.93068 11.4239L1.93676 11.432C1.95501 11.4644 1.97327 11.4989 1.99152 11.5334H6.54443V8.71239C6.54443 8.64343 6.54849 8.57448 6.5566 8.50553H3.97695C3.84716 8.50553 3.73156 8.4528 3.64638 8.36762C3.56121 8.28244 3.50848 8.16685 3.50848 8.03705V5.88735C3.47603 5.87113 3.44561 5.85287 3.41316 5.83259C3.35841 5.79609 3.30568 5.7535 3.257 5.70483L3.24889 5.69672C3.15358 5.6014 3.07448 5.4858 3.02175 5.35601C2.97105 5.2323 2.94266 5.09642 2.94266 4.95446C2.94266 4.81655 2.96903 4.68473 3.01973 4.56102L3.02175 4.55291C3.07448 4.42312 3.15358 4.30955 3.24889 4.2122C3.34421 4.11689 3.45981 4.03779 3.5896 3.98506C3.71331 3.93436 3.84919 3.90597 3.99115 3.90597C4.13108 3.90597 4.26696 3.93436 4.3927 3.98506C4.52249 4.03779 4.63809 4.11689 4.73341 4.2122C4.82669 4.31158 4.90579 4.4292 4.95852 4.55899C5.00922 4.6827 5.03761 4.81858 5.03761 4.96054C5.03761 5.1025 5.00922 5.23838 4.95852 5.36209C4.90579 5.4858 4.83075 5.59937 4.73746 5.69266L4.73138 5.70077C4.67865 5.7535 4.61781 5.8042 4.55088 5.84273C4.51641 5.86301 4.4799 5.88532 4.43934 5.90357V7.57061H6.98451V7.58278C7.00073 7.56452 7.01899 7.54627 7.03521 7.53005C7.34955 7.2157 7.78558 7.02101 8.26622 7.02101H9.2417V1.56766H6.19358C6.17736 1.59403 6.16113 1.62039 6.14288 1.64675C6.10638 1.69948 6.06582 1.74613 6.0212 1.79277C5.92588 1.88809 5.81029 1.96718 5.68049 2.01991C5.55678 2.07061 5.42091 2.099 5.27894 2.099C5.13901 2.099 5.0011 2.07061 4.87739 2.01991C4.7476 1.96718 4.63403 1.88809 4.53669 1.79277C4.44137 1.69746 4.36228 1.58186 4.30955 1.45206C4.25885 1.32633 4.23046 1.19248 4.23046 1.04849C4.23046 0.908554 4.25885 0.774705 4.30955 0.646939C4.36228 0.517146 4.44137 0.401549 4.53669 0.306231C4.632 0.210914 4.7476 0.131821 4.87739 0.0790929C5.0011 0.0283923 5.13698 0 5.27894 0C5.41685 0 5.54867 0.0263643 5.67238 0.0770649L5.68049 0.0790929C5.81029 0.131821 5.92385 0.210914 6.0212 0.306231C6.08001 0.365044 6.13274 0.433997 6.17736 0.504978C6.20169 0.54351 6.224 0.590155 6.24428 0.632743H9.71017C9.83997 0.632743 9.95556 0.685472 10.0407 0.770649C10.1279 0.857854 10.1807 0.973451 10.1807 1.10324V7.02101H12.4521V1.98949C12.4176 1.97124 12.3831 1.95299 12.3486 1.93068C12.2858 1.89215 12.2269 1.84347 12.1762 1.79277C12.0789 1.69543 12.0018 1.58186 11.9491 1.45206C11.8984 1.32835 11.87 1.19248 11.87 1.05052C11.87 0.91261 11.8964 0.780789 11.9471 0.657079L11.9491 0.648967C12.0018 0.519174 12.0809 0.405605 12.1762 0.308259C12.2716 0.212942 12.3872 0.13385 12.517 0.0811209C12.6407 0.0304203 12.7765 0.00202802 12.9185 0.00202802C13.0584 0.00202802 13.1943 0.0304203 13.3201 0.0811209C13.4498 0.13385 13.5654 0.212942 13.6608 0.308259C13.7561 0.403577 13.8352 0.519174 13.8879 0.648967C13.9386 0.772677 13.967 0.908554 13.967 1.05052C13.967 1.18842 13.9406 1.32024 13.8899 1.44395L13.8879 1.45206C13.8352 1.58186 13.7561 1.69543 13.6608 1.79277C13.6101 1.84347 13.5553 1.88809 13.4945 1.92865L13.4864 1.93473C13.4539 1.95299 13.4194 1.97124 13.385 1.98949V7.01899H16.4128V3.97695C16.4128 3.84716 16.4655 3.73156 16.5507 3.64638C16.6359 3.56121 16.7515 3.50848 16.8813 3.50848H19.033C19.0492 3.47603 19.0675 3.44561 19.0878 3.41316C19.1243 3.35841 19.1668 3.30568 19.2155 3.257L19.2236 3.24889C19.3189 3.15358 19.4345 3.07448 19.5643 3.02175C19.688 2.97105 19.8239 2.94266 19.9659 2.94266C20.1038 2.94266 20.2356 2.96903 20.3593 3.01973L20.3674 3.02175C20.4972 3.07448 20.6108 3.15358 20.7081 3.24889C20.8035 3.34421 20.8826 3.45981 20.9353 3.5896C20.986 3.71331 21.0144 3.84919 21.0144 3.99115C21.0144 4.13108 20.986 4.26696 20.9353 4.3927C20.8826 4.52249 20.8035 4.63809 20.7081 4.73341C20.6067 4.82669 20.4911 4.90579 20.3613 4.95852C20.2376 5.00922 20.1018 5.03761 19.9598 5.03761C19.8178 5.03761 19.682 5.00922 19.5583 4.95852C19.4345 4.90579 19.321 4.83075 19.2277 4.73746L19.2196 4.73138C19.1668 4.67865 19.1161 4.61781 19.0776 4.55291C19.0553 4.51843 19.035 4.48193 19.0168 4.44137H17.3497V7.04535C17.7087 7.10822 18.0291 7.28263 18.2745 7.52802C18.5807 7.83425 18.7694 8.25202 18.7694 8.71036V8.91924H23.3527V5.86707C23.3263 5.85085 23.3 5.83462 23.2736 5.81637C23.2209 5.77986 23.1742 5.7393 23.1296 5.69469C23.0343 5.59937 22.9552 5.48377 22.9025 5.35398C22.8518 5.23027 22.8234 5.09439 22.8234 4.95243C22.8234 4.8125 22.8518 4.67459 22.9025 4.55088C22.9552 4.42109 23.0343 4.30752 23.1296 4.21018C23.2249 4.11486 23.3405 4.03577 23.4703 3.98304C23.594 3.93234 23.7299 3.90394 23.8719 3.90394C24.0118 3.90394 24.1477 3.93234 24.2734 3.98304C24.4032 4.03577 24.5188 4.11486 24.6141 4.21018C24.7094 4.30549 24.7885 4.42109 24.8413 4.55088C24.892 4.67459 24.9203 4.81047 24.9203 4.95243C24.9203 5.09034 24.894 5.22216 24.8433 5.34587L24.8413 5.35398C24.7885 5.48377 24.7094 5.59734 24.6141 5.69469C24.5553 5.7535 24.4863 5.80623 24.4154 5.85085C24.3748 5.87518 24.3302 5.89749 24.2876 5.91777V9.38366C24.2876 9.51345 24.2349 9.62905 24.1497 9.71423C24.0625 9.80143 23.9469 9.85416 23.8171 9.85416H18.7694V12.1255H22.9309C22.9491 12.0911 22.9674 12.0566 22.9897 12.0221C23.0302 11.9592 23.0769 11.9004 23.1276 11.8497C23.2249 11.7524 23.3385 11.6753 23.4683 11.6226C23.592 11.5719 23.7279 11.5435 23.8698 11.5435C24.0077 11.5435 24.1396 11.5699 24.2633 11.6206L24.2714 11.6226C24.4012 11.6753 24.5147 11.7544 24.6121 11.8497C24.7074 11.9451 24.7865 12.0607 24.8392 12.1904C24.8899 12.3142 24.9183 12.45 24.9183 12.592C24.9183 12.7319 24.8899 12.8678 24.8392 12.9935C24.7865 13.1233 24.7074 13.2389 24.6121 13.3342C24.5168 13.4296 24.4012 13.5087 24.2714 13.5614C24.1477 13.6121 24.0118 13.6405 23.8698 13.6405C23.7319 13.6405 23.6001 13.6141 23.4764 13.5634L23.4683 13.5614C23.3385 13.5087 23.2249 13.4296 23.1276 13.3342C23.0769 13.2835 23.0323 13.2288 22.9917 13.168L22.9856 13.1598C22.9674 13.1274 22.9491 13.0929 22.9309 13.0584H18.7694V16.0863H20.9434C21.0732 16.0863 21.1888 16.139 21.274 16.2242C21.3591 16.3094 21.4119 16.425 21.4119 16.5547V18.7065C21.4443 18.7227 21.4747 18.741 21.5072 18.7633C21.5619 18.7998 21.6147 18.8424 21.6633 18.891L21.6715 18.8991C21.7668 18.9945 21.8459 19.1101 21.8986 19.2399C21.9493 19.3636 21.9777 19.4994 21.9777 19.6414C21.9777 19.7793 21.9513 19.9111 21.9006 20.0348L21.8986 20.0429C21.8459 20.1727 21.7668 20.2863 21.6715 20.3837C21.5761 20.479 21.4605 20.5581 21.3307 20.6108C21.207 20.6615 21.0712 20.6899 20.9292 20.6899C20.7893 20.6899 20.6534 20.6615 20.5276 20.6108C20.3979 20.5581 20.2823 20.479 20.1869 20.3837C20.0937 20.2843 20.0125 20.1667 19.9598 20.0369ZM10.8479 10.5741H14.4659C14.7478 10.5741 14.9769 10.8033 14.9769 11.0852V14.4172C14.9769 14.6991 14.7478 14.9283 14.4659 14.9283H10.8479C10.566 14.9283 10.3368 14.6991 10.3368 14.4172V11.0852C10.3368 10.8033 10.566 10.5741 10.8479 10.5741ZM17.0435 7.92551H8.26825C8.06748 7.92551 7.88292 8.00866 7.74907 8.14454C7.60509 8.28853 7.51585 8.4893 7.51585 8.71239V16.79C7.51585 17.0131 7.60509 17.2139 7.74907 17.3578C7.88495 17.4937 8.06748 17.5769 8.26825 17.5769H17.0435C17.2443 17.5769 17.4288 17.4937 17.5627 17.3578C17.7067 17.2139 17.7959 17.0131 17.7959 16.79V8.71239C17.7959 8.4893 17.7067 8.28853 17.5627 8.14454C17.4288 8.00866 17.2443 7.92551 17.0435 7.92551Z' />
  </Icon>
)
