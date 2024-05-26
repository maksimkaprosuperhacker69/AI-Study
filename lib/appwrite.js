import {Account, Client, Databases, ID, Query, Storage,} from "react-native-appwrite";

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aistudy',
    projectId: '663c968d0034314f646f',
    databaseId: '663c984a00205183e6bf',
    userCollectionId: '663c988700126b972457',
    courseCollectionId: '66405a9f002b8f5d196b',
    storageId: '663c9a3500271995569d'
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

function getCurrentDate() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    const monthIndex = currentDate.getMonth(); // Получаем индекс текущего месяца
    const day = currentDate.getDate(); // Получаем текущий день

    const monthName = months[monthIndex]; // Получаем название месяца из массива

    // Форматируем день так, чтобы он имел две цифры (добавляем ведущий ноль, если день < 10)
    const formattedDay = day < 10 ? '0' + day : day;

    // Возвращаем сформированную дату в виде строки "месяц день"
    return `${monthName} ${formattedDay}`;
}

export async function createUser(email, password, username) {

    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;


        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                username: username,
            }
        );

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try {

        const session = await account.createEmailSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        return null;
    }
}

export async function getUserCourses(userId) {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.courseCollectionId,

            [Query.orderDesc("date"),
                Query.equal("creatorId", userId)]
        );
        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getCoursesById(id) {
    try {

        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.courseCollectionId,
            [Query.equal("$id", id)]
        );
        return posts.documents[0];
    } catch (error) {
        throw new Error(error);
    }
}

export async function signOut() {
    try {
        const session = await account.deleteSession("current");

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getFilePreview(fileId) {
    let fileUrl;

    try {

        fileUrl = storage.getFileView(appwriteConfig.storageId, fileId);


        if (!fileUrl) throw Error;

        return fileUrl;
    } catch (error) {
        throw new Error(error);
    }
}

export async function uploadFile(file, type) {
    if (!file) return;

    const {mimeType, ...rest} = file;
    const asset = {type: mimeType, ...rest};


    try {
        const uploadedFile = await storage.createFile(
            appwriteConfig.storageId,
            ID.unique(),
            asset
        );

        const fileUrl = await getFilePreview(uploadedFile.$id, type);
        return fileUrl;
    } catch (error) {
        throw new Error(error);
    }

}

export async function createVideoPost(form) {
    try {
        const [file] = await Promise.all([
            uploadFile(form.file, "file"),
        ]);

        const newPost = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.courseCollectionId,
            ID.unique(),
            {
                title: form.title,
                description: form.description,
                file: file,
                date: getCurrentDate(),
                creatorId: form.userId,
            }
        );

        return newPost;
    } catch (error) {
        throw new Error(error);
    }
}

export function useApi(promt, url, courseId) {
    try {

        const response = fetch(`http://0.0.0.0:80/ans/?promt_response=${promt}&file_path=${url}&course_id=${courseId}`).then(response => response.json())


        return response

    } catch (error) {
        throw new Error(error);
    }
}