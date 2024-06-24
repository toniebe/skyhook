import { DirectParseProvider } from '../provider/BaseProvider.js'

export class Embrace extends DirectParseProvider {

    public getName(): string {
        return 'Embrace IO'
    }

    public getPath(): string {
        return 'embraceio'
    }

    public async parseData(): Promise<void> {
        this.setEmbedColor(14170742)
        const projectName = this.body.projectName ?? 'D2D-App'
        const projectVersion = this.body.buildNumber ?? 'Embrace'
        let share = null
        try {
            share = this.body.links.artifacts[0].files.href
        } catch (err) {
            // Artifact not present
        }
        // const type = this.body.buildStatus
        const content = 'Embrace Alert: A new issue has been detected. Please investigate.'
        const download = this.body.downloadlink ?? 'https://embrace.io/'
        this.payload.username = projectName + ' Embrace IO'
        this.payload.avatar_url = 'https://play-lh.googleusercontent.com/JboJDdtKBMWmb039ZQhCjzuDiyKKSZjDbeY0o17yk2H-KL-u5cDeGbkpladlrxBgYIk=w240-h480-rw'
       
        this.addEmbed({
            title: '[' + projectName + '] ' + ' Alert from ' + projectVersion,
            url: download,
            description: content
        })
    }
}
